import React, { Component } from 'react';
import { Panel, Button, Radio, FormGroup, ControlLabel } from 'react-bootstrap';
import PageHeader from '@mdsol/lego/lib/PageHeader';

export default class BasicForm extends Component {
  render() {
    return (
        <div>
            <PageHeader heading="Basic Form" />
            <div className="mcc-content mcc-content-max">
            <Panel
                header={"Simple Panel Title"}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Field Label</label>
                                <input type="text" className="form-control" placeholder="Placeholder"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup>
                                <label>Field Label</label>
                                <input type="text" className="form-control" placeholder="Placeholder"/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup>
                                <ControlLabel>
                                Radio buttons
                                </ControlLabel>
                                <Radio name="radioGroup">
                                1
                                </Radio>
                                <Radio name="radioGroup">
                                2
                                </Radio>
                                <Radio name="radioGroup">
                                3
                                </Radio>
                            </FormGroup>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <Button bsStyle="primary">Save</Button>
                        <Button bsStyle="default">Cancel</Button>
                    </div>
                </Panel>
            </div>
        </div>
    )
  }
}
