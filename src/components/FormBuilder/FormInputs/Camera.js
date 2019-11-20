import React from 'react';

class Camera extends React.Component {
    constructor(props) {
        super(props);
        this.inputField = React.createRef();
        this.state = {
            img: null
        };
    }

    displayImage = e => {
        var self = this;
        var target = e.target;
        var file, reader;

        if (target.files && target.files.length) {
            file = target.files[0];
            reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = function () {
                self.setState({
                    img: reader.result,
                });
            };
        }
    };

    clearImage = () => {
        this.setState({
            img: null,
        });
    };

    render() {
        let props = {};
        props.type = 'hidden';
        props.name = this.props.data.field_name;

        if (this.props.read_only) {
            props.disabled = 'disabled';
        }

        if (this.props.mutable) {
            props.defaultValue = this.state.img || this.props.defaultValue;
            props.ref = this.inputField;
        }

        let baseClasses = 'SortableItem rfb-item';
        if (this.props.data.pageBreakBefore) {
            baseClasses += ' alwaysbreak';
        }

        return ( <
            div className = {
                baseClasses
            } > {
                !this.props.mutable && ( <
                    div > {
                        this.props.data.pageBreakBefore && ( <
                            div className = "preview-page-break" > Page Break < /div>
                        )
                    } <
                    HeaderBar parent = {
                        this.props.parent
                    }
                    editModeOn = {
                        this.props.editModeOn
                    }
                    data = {
                        this.props.data
                    }
                    onDestroy = {
                        this.props._onDestroy
                    }
                    onEdit = {
                        this.props.onEdit
                    }
                    static = {
                        this.props.data.static
                    }
                    required = {
                        this.props.data.required
                    }
                    /> < /
                    div >
                )
            } <
            div className = "form-group" >
            <
            label className = "form-label" > {
                this.props.data.label
            } {
                this.props.data.hasOwnProperty('required') &&
                    this.props.data.required === true &&
                    !this.props.read_only && ( <
                        span className = "label-required label label-danger" > Required < /span>
                    )
            } <
            /label> <
            div className = "image-upload-container" > {
                !this.state.img && ( <
                    div >
                    <
                    input type = "file"
                    accept = "image/*"
                    capture = "camera"
                    className = "image-upload"
                    onChange = {
                        this.displayImage
                    }
                    /> <
                    div className = "image-upload-control" >
                    <
                    div className = "btn btn-default btn-school" >
                    <
                    i className = "fa fa-camera" / > Upload Photo <
                    /div> <
                    p > Select an image from your computer or device. < /p> < /
                    div > <
                    /div>
                )
            }

            {
                this.state.img && ( <
                    div >
                    <
                    img src = {
                        this.state.img
                    }
                    height = "100"
                    className = "image-upload-preview" / >
                    <
                    br / >
                    <
                    input type = "hidden" {
                        ...props
                    }
                    /> <
                    div className = "btn btn-school btn-image-clear"
                    onClick = {
                        this.clearImage
                    } >
                    <
                    i className = "fa fa-times" / > Clear Photo <
                    /div> < /
                    div >
                )
            } <
            /div> < /
            div > <
            /div>
        );
    }
}

export default Camera;