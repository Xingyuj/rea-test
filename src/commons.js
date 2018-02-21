/**
 * Created by xingyuji on 21/2/18.
 */
import React from "react";
import {TableRowColumn} from "material-ui/Table";
import assign from "object-assign";
import Divider from 'material-ui/Divider';

export class Separator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            styles: {
                separator: {
                    clear: 'both',
                    width: '100%',
                    height: '100%',
                    borderBottom: props.line === 'none' ? '' : '1px solid',
                    borderColor: typeof props.lineColor === 'undefined' ? '#A9A9A9' : props.lineColor,
                    textAlign: 'center',
                    marginTop: '0.5em',
                    marginBottom: '0.5em',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                },
                separatorContent: {
                    color: '#A9A9A9',
                    fontSize: props.fontSize,
                    fontFamily: props.fontFamily,
                    backgroundColor: '#fff',
                    // padding: 5,
                    paddingTop: 'auto',
                    paddingBottom: 'auto'
                }
            }

        };
    }

    render() {
        const {separator, separatorContent} = this.state.styles;
        return (
            <div style={assign(separator, this.props.style) }>
        <span style={assign(separatorContent, this.props.contentStyle)}>
          {this.props.content}
        </span>
            </div>
        );
    }
}