import { Card } from "@mui/material";
import PropTypes from 'prop-types';



function ArticleProp(props: any) {
    const { data } = props;
    return (<Card variant="outlined">{data.title}</Card>
    );
}


ArticleProp.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        category_id: PropTypes.number.isRequired,
        feature: PropTypes.bool.isRequired
    })
}

export default ArticleProp;
