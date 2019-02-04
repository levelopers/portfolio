class Refs {
  constructor(){
    this.refs={
      home:null,
      projects:null,
      about:null
    }
  }
  set_Ref(name,ref){
    switch (name){
      case 'home': this.refs.home=ref;
      break;
      case 'projects': this.refs.projects=ref;
      break;
      case 'about': this.refs.about=ref;
      break;
      default: break;
    }
  }
  get_Ref(name){
    switch (name){
      case 'home': return this.refs.home
      case 'projects': return this.refs.projects
      case 'about': return this.refs.about
      default: break;
    }
  }
}

export default new Refs