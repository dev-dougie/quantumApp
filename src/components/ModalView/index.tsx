import React, { ReactNode } from 'react'
import { ModalProps } from 'react-native'
import { Modal, View, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'
import { styles } from './styles'

type Props = Modal & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ closeModal, children, ...rest }: Props) {
    return (

        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    )
}
