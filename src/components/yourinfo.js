import React from "react";

class Yourinfo extends React.Component{

    back =(e)=>{
        e.preventDefault();
        this.props.prevStep();

       };

       render(){

        const {firstName,lastName,handelChange,btCourse,cgpa,pgCourse,country}=this.props
       

        return(
            <>
                <h2>This is the information you have entered</h2>
                <div className="info"
                style={{padding:"3rem",
                fontWeight:"bolder",
                lineHeight:"4rem",
                fontSize:"30px"}}
                >

                    FirstName : {firstName}<br />
                    LastName : {lastName}<br />
                    B.Tech : {btCourse}<br />
                    CGPA : {cgpa}<br />
                    P.G course : {pgCourse}<br />
                    Country : {country}<br />
                </div>

                <button className="btn waves-effect waves-light blue" type="submit" name="action"
        onClick={this.back}>
          <i className="material-icons right">Previous</i>
        </button>

        <button className="btn waves-effect waves-light blue" type="submit" name="action">
          <i className="material-icons right">Done</i>
        </button>

            </>
        )
    }
}

export default Yourinfo;