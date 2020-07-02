import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About(props) {
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12}>
                    <h1>About This Project</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    This is a side project meant to give people a quick overview of the current US congressional districts as well as who represents them.
                    The district locations come from a TIGER/Line Shapefile available on the <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html">US Census website</a>. All representative data comes from the <a href="https://en.wikipedia.org/wiki/List_of_current_members_of_the_United_States_House_of_Representatives">list of current members of the US House of Representatives Wikipedia page</a>.
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="pt-4">
                    <h2>
                        Current map dataset
                    </h2>
                    <div>
                        2019 - All legal boundaries and names are as of January 1, 2019. Released August 9, 2019.
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default About;