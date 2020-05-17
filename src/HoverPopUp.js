import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HoverPopup(props) {
    let hoveredFeature = props.hoveredFeature;
    let x = props.x;
    let y = props.y;
    if (hoveredFeature) {
        let properties = hoveredFeature.properties;
        let rep = JSON.parse(properties.REP);

        return (
            <div className="hover-popup" style={{ left: x, top: y }}>
                <Row>
                    <Col xs={12}>
                        <div className="name">{rep.Member}</div>
                        <div className="value"><span className="font-weight-bold">District: </span> {rep.District}</div>
                        <div className="value"><span className="font-weight-bold">Party: </span> {rep.Party}</div>
                        <div className="value"><span className="font-weight-bold">Education: </span> {rep.Education}</div>
                        <div className="value"><span className="font-weight-bold">Prior experience: </span> {rep["Prior experience"]}</div>
                        <div className="value"><span className="font-weight-bold">Assumed office: </span> {rep["Assumed office"]}</div>
                        <div className="value"><span className="font-weight-bold">Residence: </span> {rep.Residence}</div>
                        <div className="value"><span className="font-weight-bold">Born: </span> {rep.Born}</div>
                    </Col>
                </Row>
            </div>
        );
    }
    else {
        return null;
    }
}

export default HoverPopup;