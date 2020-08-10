import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About(props) {
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12}>
                    <h1>About this project</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    This is a side project meant to give people a quick overview of the current US Congressional Districts and who represents those districts - as well as a small bio taken from <a href="https://wikipedia.org" target="_blank">Wikipedia</a>.
                    The district locations come from a TIGER/Line Shapefile available on the <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html">US Census website</a>. All representative data comes from the <a href="https://en.wikipedia.org/wiki/List_of_current_members_of_the_United_States_House_of_Representatives">list of current members of the US House of Representatives Wikipedia page</a>.
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="pt-4">
                    <h2>
                        Code
                    </h2>
                    <div>
                        You can contribute to this project by forking the <a href="https://github.com/clintmcmahon/us-congressional-districts" target="_blank">Github repo</a>. 
                        The map is created in Mapbox using this <a href="https://api.mapbox.com/styles/v1/msoftware/ckaa9m3sd1esj1ipe52icltqv.html?fresh=true&title=copy&access_token=pk.eyJ1IjoibXNvZnR3YXJlIiwiYSI6ImNrOWFxZTB5ejAzZTEzZW14OHBkcTZlNzcifQ.TDhGUrMhiDtxiRdCx_9rYQ" target="_blank">style</a>.
                    </div>
                    <div>
                        If you found an error in the map or bio data drop me a line at clint@msoftwaredev.com.
                    </div>
                </Col>
             </Row>
            <Row>
                <Col xs={12} className="pt-4">
                    <h2>
                        Current map dataset (Last updated on 8/1/2020)
                    </h2>
                    <div>
                        2019 - All legal boundaries and names are as of January 1, 2019. Released August 9, 2019.
                    </div>
                    <div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;