import PropTypes from "prop-types";

/** @jsx jsx */
import { jsx } from "@emotion/core";

const RecursiveList = ({ data, levels, ListItem }) => {
    const mapData = data[levels.dataKey];

    if (levels.isLeaf) {
        return mapData.map((itm, ix) => (
            <ListItem
                {...itm}
                level={levels.level}
                key={`${levels.level}-${ix}`}
                toggleOpen={() => levels.toggleOpen(itm)}
            />
        ));
    } else {
        return mapData.map((itm, ix) => (
            <ListItem
                {...itm}
                isOpen={levels.isOpen(itm)}
                level={levels.level}
                key={`${levels.level}-${ix}`}
                toggleOpen={() => levels.toggleOpen(itm)}
            >
                {levels.next.map((lvl, i) => (
                    <RecursiveList
                        key={i}
                        data={itm}
                        levels={lvl}
                        ListItem={ListItem}
                    />
                ))}
            </ListItem>
        ));
    }
};

RecursiveList.propTypes = {
    levels: PropTypes.shape({
        dataKey: PropTypes.string.isRequired,
        isLeaf: PropTypes.bool,
        level: PropTypes.number.isRequired,
        next: PropTypes.array.isRequired,
    }).isRequired,
    data: PropTypes.object.isRequired,
};

export default RecursiveList;
