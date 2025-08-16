import { useState } from 'react';

import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

import { useAnimation } from '@/hooks/useAnimation';

interface Props {
    style: StyleProp<ImageStyle>
    uri: string;
}

export default function FadeInImage({ style, uri }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const { animatedOpacity, fadeIn } = useAnimation();

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>

        {
            isLoading && (
                <ActivityIndicator
                    color='grey'
                    size={30}
                    style={{ position: 'absolute' }}
                />
            )
        }

        <Animated.Image
            source={{ uri }}
            style={[ style, { opacity: animatedOpacity } ]}
            onLoadEnd={() => {
                fadeIn({});
                setIsLoading(false);
            }}
        />
        </View>
    )
}