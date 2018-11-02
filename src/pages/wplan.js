import React, {Component} from 'react';
import style from '../style/wplan.less';
import {Form, Select, Input, Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Wplan extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={style.wplan}>
                <Form className={style.form} onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('note', {
                            rules: [{required: true, message: 'Please input your note!'}],
                            normalize: (value, prevValue='', allValues) => {
                                let targetValues = '';
                                var reg = new RegExp('^(\\d\{0,'+6+'\}).*');
                                targetValues = value.replace(/[^\d]/g, '').replace(reg, '$1');
                                return targetValues;
                            }
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('gender', {
                            rules: [{required: true, message: 'Please select your gender!'}],
                        })(
                            <Select
                                placeholder="Select a option and change input text above"
                                onChange={this.handleSelectChange}
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        wrapperCol={{span: 12, offset: 5}}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Wplan);
