
/**
 * 基础元素属性
 */
export declare interface YNodeType {
  className?: string
}

/**
 * 公共弹层属性
 */
export declare interface YModalType extends YNodeType {
  visiable: boolean;
  setVisiable?: (open: boolean) => void
  title?: string
  onOk?: () => void
  onCancel?: () => void
}

export type RecordType<K extends string, T> = {
  [P in K]: T
}