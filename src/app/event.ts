export class EventItem {

	constructor
	(
		public	id : number,
		public	title : string,
		public 	description: string,
		public 	isCompleted: boolean
	)

	{

	} 

	clear() :void {
		this.title = "";
		this.description ="";
		this.isCompleted= false;
	}
	
}