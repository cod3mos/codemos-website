export interface Item {
    title: string
    sourceImage: string
    description: string
}

const tips: Item[] = [
    {
        sourceImage: 'icons/icon-settings.png',
        title: 'Melhorias Continuas',
        description: 'Se esta bom por que não melhorar? não existe programa ou aplicativo perfeito.'
    },
    {
        sourceImage: 'icons/icon-focus.png',
        title: 'Foco no Processo',
        description:
            'Para definir seus processos é preciso saber seu objetivo! você sabe o seu? não... então bora definir'
    },
    {
        sourceImage: 'icons/icon-graph.png',
        title: 'Escalabilidade',
        description: 'Faça o hoje pensando no amanhã, mas sem deixar de melhorar o agora.'
    },
    {
        sourceImage: 'icons/icon-warning.png',
        title: 'Cuidados',
        description:
            'Já tem um aplicativo? e qual foi a última atualização? muitos usuários só continuam a utilizar um aplicativo pelas novidades!'
    },
    {
        sourceImage: 'icons/icon-fire.png',
        title: 'Aplicativos em alta',
        description: 'Aplicativos hoje são indispensaveis para tudo então que você está esperando?'
    },
    {
        sourceImage: 'icons/icon-coffee.png',
        title: 'Tão bom quanto um café',
        description:
            'Não há como agradar todos, mas isto não é desculpa para não tentar! durante seu café pense em como pode melhorar.'
    }
]

export { tips }
