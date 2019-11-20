import React from 'react';

class Download extends React.Component {
    render() {
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
                    /> <
                    /div>
                )
            } <
            div className = "form-group" >
            <
            a href = {
                this.props.download_path + '?id=' + this.props.data.file_path
            } > {
                this.props.data.content
            } <
            /a> <
            /div> <
            /div>
        );
    }
}

export default Download;