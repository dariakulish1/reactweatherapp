import React, {Fragment} from "react";


const Searchbar = () => ([
    <Fragment>
        <div className="title">
                    <h1 className="weather">Weather</h1>
                    <form>
                    <input
                        className="searching"
                        type="text"
                        name="City"
                        // value={inputText}
                        placeholder="Write city..."
                    />
                    </form>
                    <button className="Find">Find</button>
                    <hr className="hr"/>
            </div>    
    </Fragment>
])

export default Searchbar;
