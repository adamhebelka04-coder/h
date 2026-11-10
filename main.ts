player.onChat("run", function () {
	
})
player.onItemInteracted(BOOK_QUILL, function () {
    gameplay.xp(67, mobs.target(NEAREST_PLAYER))
})
