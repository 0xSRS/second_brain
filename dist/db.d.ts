import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        email?: string | null;
        username?: string | null;
        password?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        email?: string | null;
        username?: string | null;
        password?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email?: string | null;
    username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map