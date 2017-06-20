import React, { Component } from 'react';
import { View, Text } from 'native-base';
import GenerateForm from '../../formBuilder';

export default class FormField extends Component {
  static propTypes = {
    attributes: React.PropTypes.object,
    theme: React.PropTypes.object,
    updateValue: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentDidMount() {
    this.props.updateValue(this.props.attributes.name, this.group.getValues());
  }
  onValueChange() {
    this.props.updateValue(this.props.attributes.name, this.group.getValues());
  }
  handleChange(text) {
    this.setState({
      value: text,
    }, () => this.props.updateValue(this.props.attributes.name, text));
  }
  render() {
    const attributes = this.props.attributes;
    const theme = this.props.theme;
    return (
      <View>
        <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>{attributes.label}</Text>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <GenerateForm
            ref={(c) => { this.group = c; }}
            onValueChange={this.onValueChange}
            autoValidation
            showErrors
            fields={attributes.fields}
            theme={theme}
          />
        </View>
      </View>
    );
  }
}
