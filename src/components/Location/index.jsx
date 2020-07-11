import React from "react";
import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import useStyle from "./styles";

const OptionSelection=({ type }) => {
    const classes = useStyle();
    return (
        <div>
            <IconButton className={classes.selection}>
                {type}
                <Icon>keyboard_arrow_down</Icon>
            </IconButton>
        </div>
    );
};

export default OptionSelection;
