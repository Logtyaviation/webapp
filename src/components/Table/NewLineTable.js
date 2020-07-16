import React, {Component} from 'react'

class NewLineTable extends Component{
    constructor(props){
        super(props)
        this.state={
            p:props.p
        }
    }
    render(){
            const array=[]
            for (let j=0;j<this.state.p;j++){
                array.push(this.NewLineTableFunction(j))
            }
        return array
    }
    NewLineTableFunction(i){
    
        return(
            <tbody>
                <tr>
                    <td>DepartureDate{i}</td>
                    <td>OffBlock{i}</td>
                    <td>DeparturePlace{i}</td>
                    <td>ArrivalDate{i}</td>
                    <td>OnBlock{i}</td>
                    <td>ArrivalPlace{i}</td>
                    <td>NamePIC{i}</td>
                    <td>Type{i}</td>
                    <td>Registration{i}</td>
                    <td>SinglePilot{i}</td>
                    <td>MultiPilot{i}</td>
                    <td>TOD{i}</td>
                    <td>TON{i}</td>
                    <td>LDGD{i}</td>
                    <td>LDGN{i}</td>
                    <td>IFR{i}</td>
                    <td>Night{i}</td>
                    <td>PIC{i}</td>
                    <td>Copilot{i}</td>
                    <td>Dual{i}</td>
                    <td>Instructor{i}</td>
                    <td>TotalTime{i}</td>
                    <td>Remark{i}</td>
                </tr>
            </tbody>
        )
    }
    
}


export default NewLineTable