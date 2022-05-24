import { prop, Ref } from '@typegoose/typegoose';
import { Category } from './../categories/category.model';

import * as mongoose from 'mongoose';

export class Game {
    @prop({ required: true })
    name: string;
    @prop({ type: Number, required: true })
    price: number;
    @prop({ required: true })
    image: string;
    @prop({ required: true })
    salerate: string;
    @prop({ autopopulate: true, ref: Category })
    category: Ref<Category>;
}