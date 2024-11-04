import GameLinkItem from "./GameLinkItem";
import GameData from "../Data/Games";



function GameLinkList() {

	const gameLinks = GameData.map((game) => {
		

		return game.vaild && (
			<GameLinkItem
				key={game.id}
				GameName={game.title}
				GameLink={game.page}
			/>
		);
	})

	return(
		<>
			<div className="ml-2 text-blue-100">
				{gameLinks}
			</div>
		</>
	);
}



export default GameLinkList;