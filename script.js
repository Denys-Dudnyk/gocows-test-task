const casinoData = [
	{
		id: 1,
		name: 'Sports Interaction Casino',
		logo: 'public/sports_interaction_casino.png',
		rating: 4.4,
		freeSpins: 20,
		depositBonus: '200% First deposit bonus + 250 FS',
		isNew: true,
	},
	{
		id: 2,
		name: '21 Dukes Casino',
		logo: 'public/dukes_casino.png',
		rating: 4.4,
		freeSpins: 20,
		depositBonus: '200% First deposit bonus + 250 FS',
		isNew: false,
	},
	{
		id: 3,
		name: 'AC Casino',
		logo: 'public/ac_casino.png',
		rating: 4.4,
		freeSpins: 50,
		depositBonus: '200% First deposit bonus',
		isNew: true,
	},
	{
		id: 4,
		name: 'All Irish Casino',
		logo: 'public/all_irish_casino.png',
		rating: 4.4,
		freeSpins: 0,
		depositBonus: '100% First deposit bonus + 70 FS',
		isNew: false,
	},
	{
		id: 5,
		name: 'Sports Interaction Casino',
		logo: 'public/sports_interaction_casino.png',
		rating: 4.4,
		freeSpins: 20,
		depositBonus: '200% First deposit bonus + 250 FS',
		isNew: true,
	},
	{
		id: 6,
		name: '21 Dukes Casino',
		logo: 'public/dukes_casino.png',
		rating: 4.4,
		freeSpins: 20,
		depositBonus: '200% First deposit bonus + 250 FS',
		isNew: false,
	},
	{
		id: 7,
		name: 'AC Casino',
		logo: 'public/ac_casino.png',
		rating: 4.4,
		freeSpins: 50,
		depositBonus: '200% First deposit bonus',
		isNew: true,
	},
	{
		id: 8,
		name: 'All Irish Casino',
		logo: 'public/all_irish_casino.png',
		rating: 4.4,
		freeSpins: 0,
		depositBonus: '100% First deposit bonus + 70 FS',
		isNew: false,
	},
	{
		id: 9,
		name: 'Sports Interaction Casino',
		logo: 'public/sports_interaction_casino.png',
		rating: 4.4,
		freeSpins: 20,
		depositBonus: '200% First deposit bonus + 250 FS',
		isNew: true,
	},
]

class CasinoReviews {
	constructor() {
		this.displayedCount = 4
		this.initElements()
		this.bindEvents()
		this.renderCasinos()
	}

	initElements() {
		this.casinoList = document.getElementById('casino-list')
		this.loadMoreBtn = document.getElementById('load-more')
		this.popup = document.getElementById('popup')
		this.popupTitle = document.getElementById('popup-title')
		this.popupClose = document.getElementById('popup-close')
	}

	bindEvents() {
		this.loadMoreBtn.addEventListener('click', () => this.loadMore())
		this.popupClose.addEventListener('click', () => this.closePopup())
		this.popup.addEventListener('click', e => {
			if (e.target === this.popup) this.closePopup()
		})
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') this.closePopup()
		})
	}

	createCasinoCard(casino) {
		const card = document.createElement('div')
		card.className = 'casino-card'

		card.innerHTML = `
            <div class="casino-card__logo">
                <img src="${casino.logo}" alt="${casino.name} logo">
            </div>
            <div class="casino-card__main">
                <div class="casino-card__badge">
                    ${
											casino.isNew
												? '<span class="casino-card__badge__item">NEW</span>'
												: ''
										}
								</div>
                    <a href="#" class="casino-card__title">${
											casino.name
										} Review</a>
                
                <div class="casino-card__rating">
                    <img src="public/usa-flag.svg" alt="USA" class="casino-card__flag">
                    <span>${casino.rating}</span>
                    <div class="casino-card__stars">
											 <img src="public/star_fill.svg" alt="Filled star" class="star">
                        <img src="public/star_fill.svg" alt="Filled star" class="star">
                        <img src="public/star_fill.svg" alt="Filled star" class="star">
                        <img src="public/star_fill.svg" alt="Filled star" class="star">
                        <img src="public/star_empty.svg" alt="Empty star" class="star">
										</div>
                </div>
            </div>
            <div class="casino-card__bonus">
					
                <div class="casino-card__spins" data-casino="${
									casino.name
								}" style="${casino.freeSpins === 0 ? 'display: none;' : ''}">
                    ${casino.freeSpins} Free Spins
                </div>
                <div class="casino-card__deposit">${casino.depositBonus}</div>
            </div>
            <button class="casino-card__visit">VISIT</button>
        `

		card.querySelector('.casino-card__spins').addEventListener('click', () => {
			this.showPopup(casino.name, casino.freeSpins)
		})

		return card
	}

	renderCasinos() {
		this.casinoList.innerHTML = ''
		casinoData.slice(0, this.displayedCount).forEach(casino => {
			this.casinoList.appendChild(this.createCasinoCard(casino))
		})

		this.loadMoreBtn.style.display =
			this.displayedCount >= casinoData.length ? 'none' : 'block'
	}

	loadMore() {
		this.displayedCount += 5
		this.renderCasinos()
	}

	showPopup(casinoName, freeSpins) {
		this.popupTitle.textContent = `${freeSpins} Free Spins at ${casinoName}`
		this.popup.style.display = 'flex'
		document.body.style.overflow = 'hidden'
	}

	closePopup() {
		this.popup.style.display = 'none'
		document.body.style.overflow = ''
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new CasinoReviews()
})
