/**Guid方法 */
interface Guid {
    /**Guid为空 */
    readonly Empty: String,
    /**生成Guid */
    NewGuid(): String
}

export declare var Guid: Guid;

export default Guid