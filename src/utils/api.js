let portfolioList = [
    {
        index: 1,
        name: 'Название кейса',
        description: 'Описание кейса, текст',
        image: '????',
        date: '31.03.2025' // Дата опубликования кейса || завершения проекта
    }
]





export const getPortfolioList = () => {
    return portfolioList
}

export const addPortfolioCase = (portfolioCase) => {
    index = portfolioList[-1].index + 1
    portfolioList.push({
        index: index,
        name: portfolioCase.name,
        description: portfolioCase.description,
        image: portfolioCase.image,
        date: portfolioCase.date
    })
}

export const sendMessageToTelegram = (text, telegramUsername) => {
    
}

