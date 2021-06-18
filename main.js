const panelEl = document.getElementById('panel_wrapper')

panelEl.addEventListener('click', cardHendler)


function cardHendler(e) {
	if (e.target.classList.contains('card')) {
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active')
		} else {
			clearActiveCard(this)
			e.target.classList.add('active')
		}
	}
}

function clearActiveCard(el) {
	const cards = el.children
	Array.from(cards).forEach(card => {
		card.classList.remove('active')
	})
}