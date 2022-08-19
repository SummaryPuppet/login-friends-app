import { prop, getModelForClass, modelOptions, Ref, DocumentType, mongoose } from "@typegoose/typegoose";
import bycript from "bcryptjs"


@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop({auto: true})
  _id!: mongoose.Types.ObjectId

  @prop({ required: true, trim: true })
  firstname: string;

  @prop({ required: true })
  lastname: string;
  
  @prop({ required: true })
  nickname: string;

  @prop({ required: true, trim: true, unique: true })
  email: string;

  @prop({ required: true, minlength: 6 })
  public password: string;

  @prop({ref: () => User})
  friends: Ref<User>[]

  public async encriptPassword (this: DocumentType<User>, password: string){
    return this.password = await bycript.hash(this.password, 10)
  }
}

const UserModel = getModelForClass(User);
export default UserModel;
