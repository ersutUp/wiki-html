# 生命周期

顺序：

- beforeCreate
  - 执行一次
- created
  - 执行一次
- beforeMount
  - 执行一次
- mounted
  - 执行一次
- beforeUpdate
  - 执行多次，在DOM每次更新后会执行
- updated
  - 执行多次，在DOM每次更新后会执行
- beforeUnmount
  - 执行一次
- unmounted
  - 执行一次