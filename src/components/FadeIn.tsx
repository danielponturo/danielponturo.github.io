import React, {
    PropsWithChildren,
    useEffect,
    useState,
} from 'react';

interface Props {
    transitionDuration?: number;
    onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
    const [maxIsVisible, setMaxIsVisible] = useState(0);
    const transitionDuration = props.transitionDuration || 400;

    useEffect(() => {
        let count = React.Children.count(props.children);

        if (count === maxIsVisible) {
            // We're done updating maxVisible, notify when animation is done
            const timeout = setTimeout(() => {
                if (props.onComplete) {
                    props.onComplete();
                }
            }, transitionDuration);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setMaxIsVisible(maxIsVisible + 1);
        }, 50);

        return () => clearTimeout(timeout);
    }, [
        React.Children.count(props.children),
        maxIsVisible,
        transitionDuration,
    ]);

    return (
        <div>
            {React.Children.map(props.children, (child, i) => {
                return (
                    <div
                        key={`child_${i}`}
                        data-testid={`child_${i}`}
                        style={{
                            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                            transform: maxIsVisible > i ? 'none' : 'translateY(20px)',
                            opacity: maxIsVisible > i ? 1 : 0,
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
}
