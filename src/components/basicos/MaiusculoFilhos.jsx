const MaiusculoFilhos = props => {
    console.log(props)
    function upperPhrases(componentChildren) {
        const isMoreThanOneChild = Array.isArray(componentChildren)

        if (isMoreThanOneChild)
            componentChildren.forEach(child => upperPhrases(child.props.children))
        else
            componentChildren = componentChildren.toUpperCase()
    }

    upperPhrases(props.children)

    return props.children
}

export default MaiusculoFilhos