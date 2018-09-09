export class EventItem {

	constructor(
		public	id : number,
		public	title : string,
	    public 	description: string)

	{

	} 

	clear() :void {
		this.title = "";
		this.description ="";
	}
	
}