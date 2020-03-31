import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          index:0,
          subIndex:0,
          checked1:true,
          checked2:true
        };
        this.changeState = this.changeState.bind(this);
       
        this.subList= [];
        console.log("constructor");
    }
    changeState(){
      const nowIndex = this.state.index + 1;
      this.setState({index:nowIndex});
      console.log(`=======start update ${nowIndex}======`);
    }

    changeSubProps =()=>{
      const nowIndex = this.state.subIndex + 1;
      this.createSub(nowIndex);
      this.setState({subIndex:nowIndex});
      console.log(`=======start update subIndex${nowIndex}======`);
    }

    createSub = (nowIndex)=>{
      this.subList = [];
      for(let i = 0 ; i < 2; i ++){
        this.subList.push(<AppSub key={`subkey-${i}`} pIndex={nowIndex} num={i}/>);
      }
    }
    stopGetDerivedStateFromProps = (e) =>{
      console.log(e.target);
      let checked = true;

      const tarVal = parseInt(e.target.value);
      if(tarVal === 0){
        checked = true;
      }else if(tarVal === 1){
        checked = false;
      }
      this.setState({checked1:checked});
    }

    stopShouldComponentUpdate = (e) =>{
      console.log(e.target);
      let checked = true;

      const tarVal = parseInt(e.target.value);
      if(tarVal === 0){
        checked = true;
      }else if(tarVal === 1){
        checked = false;
      }
      this.setState({checked2:checked});
    }
    //mounting
   /*  componentWillMount(){
      console.log("componentWillMount");
    } */

    //mounting & updating
    static getDerivedStateFromProps(nextProps,preState){
      console.log("getDerivedStateFromProps");
      console.log("nextProps",nextProps);
      console.log("preState",preState);
      if(!preState.checked1)
        return null;

      return preState;
    }
    
    //mounting & updating
    render(){
        console.log("render");
        return(
            <div key="main">
              <div className="Border">
                  Main render Count!- {this.state.index}
                  <div>
                    <button onClick={this.changeState}>change state</button>
                    <button onClick={this.changeSubProps}>change sub props</button>                    
                  
                  </div>  
                  <hr></hr>
                  <div onChange={this.stopGetDerivedStateFromProps}>
                    <div>
                      stop getDerivedStateFromProps
                    </div>
                    <label htmlFor="gOpen">open</label>
                    <input type="radio" name="getDerivedStateFromProps" id="gOpen" value="0" checked={this.state.checked1}/>
                    <label htmlFor="gClose">close</label>
                    <input type="radio" name="getDerivedStateFromProps" id="gClose" value="1" checked={!this.state.checked1}/>
                  </div>  
                  <hr></hr> 
                  <div onChange={this.stopShouldComponentUpdate}>
                    <div>
                      stop shouldComponentUpdate
                    </div>
                    <label htmlFor="sOpen">open</label>
                    <input type="radio" name="shouldComponentUpdate" id="sOpen" value="0" checked={this.state.checked2}/>
                    <label htmlFor="sClose">close</label>
                    <input type="radio" name="shouldComponentUpdate" id="sClose" value="1" checked={!this.state.checked2}/>
                  </div>           
              </div>
              {this.subList}
            </div>
            
        );
    }

     //mounting 
    componentDidMount(){
      console.log("componentDidMount");
    }

    /*//updating
    componentWillReceiveProps(nextProps){
      console.log("componentWillReceiveProps");
    } */

    shouldComponentUpdate(nextProps,nextState){
      console.log("shouldComponentUpdate");
      if(!this.state.checked2)
        return false;
      return true;
    }

 /*    componentWillUpdate(nextProps,nextState){
      console.log("componentWillUpdate");
    } */

    getSnapshotBeforeUpdate(preProps,preState){
      console.log("getSnapshotBeforeUpdate");
      console.log("preProps",preProps);
      console.log("preState",preState);
      console.log("=======================");
      return "testSnapShot";
    }

    componentDidUpdate(preProps, preState , snapshot){
      console.log("componentDidUpdate");
      console.log("preProps",preProps);
      console.log("preState",preState);
      console.log("snapshot",snapshot);
      console.log("=======================");
    }
    //Unmounting
    componentWillUnmount(){
      console.log("componentWillUnmount");
    }
}


class AppSub extends React.Component{
  constructor(props){
      super(props);
      this.name = `sub - ${this.props.num}`;
      this.state = {index:0};
      this.changeState = this.changeState.bind(this);
      console.log(this.name ,"constructor");
  }
  changeState(){
    const nowIndex = this.state.index + 1;
    this.setState({index:nowIndex});
    console.log(this.name ,`=======start update ${nowIndex}======`);
  }

  //mounting
 /*  componentWillMount(){
    console.log("componentWillMount");
  } */

  //mounting & updating
  static getDerivedStateFromProps(nextProps,preState){
    console.log(`sub - ${nextProps.num}`,"getDerivedStateFromProps");
    console.log("nextProps",nextProps);
    console.log("preState",preState);
    return preState;
  }
  
  //mounting & updating
  render(){
      console.log(this.name ,"render");
      return(
          <div  className="subBorder">
              {this.name}
              <div>props render count - {this.props.pIndex}</div>
              <div>state render count - {this.state.index}</div>
              <div>
                <button onClick={this.changeState}>change state</button>
              </div>
              
          </div>
      );
  }

   //mounting 
  componentDidMount(){
    console.log(this.name ,"componentDidMount");
  }

  /* //updating
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps");
  } */

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.pIndex > this.props.pIndex ){
      console.log(this.name ,"============Props Update===============");
    }

    if(nextState.index > this.state.index){
      console.log(this.name ,"============State Update===============");
    }
    console.log(this.name ,"shouldComponentUpdate");
    return true;
  }

/*    componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate");
  } */

  getSnapshotBeforeUpdate(preProps,preState){
    console.log(this.name ,"getSnapshotBeforeUpdate");
    console.log("preProps",preProps);
    console.log("preState",preState);
    console.log("=======================");
    return `${this.name}-testSnapShot`;
  }

  componentDidUpdate(preProps, preState , snapshot){
    console.log(this.name ,"componentDidUpdate");
    console.log("preProps",preProps);
    console.log("preState",preState);
    console.log("snapshot",snapshot);
    console.log("=======================");
  }
  //Unmounting
  componentWillUnmount(){
    console.log(this.name ,"componentWillUnmount");
  }
}
export default App;