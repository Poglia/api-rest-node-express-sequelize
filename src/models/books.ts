import { Model, DataTypes} from "sequelize";
import { sequelize } from "../instances/pg";

export interface BooksInstance extends Model {
    id: number;
    author: string;
    title: string;
}

export const Book = sequelize.define<BooksInstance>("Book", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    author: {
        type: DataTypes.STRING
    },

    title: {
        type: DataTypes.STRING
    }
}, {
    tableName: "books",
    timestamps: false
})