---
sidebar_position: 1
---

# 将minecraftWorlds目录下的世界批量重命名为该世界的levelname.txt

## 需求由来

由于巨硬更新后，导入.mcx文件在minecraftWorlds目录下会将乱码命名为该世界的文件夹名，不太直观看出具体哪个文件夹对应于哪个世界。本文将给批量重命名的代码。

## DeepSeek提示词

写一个.bat，要求：将该目录下的所有目录里的levelname.txt里的内容，重命名为该目录的目录名

## DeepSeek老师实现

好的，我来帮你编写一个批处理脚本。不过需要先确认一下你的需求：

你说的"将该目录下的所有目录里的levelname.txt里的内容，重命名为该目录的目录名"，我理解的意思是：

**对于当前目录下的每个子文件夹，读取该文件夹中 `levelname.txt` 文件的内容，然后用这个内容来重命名该文件夹本身。**

是这样吗？

如果理解正确，下面这个脚本可以实现：

```batch
@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo 正在处理当前目录下的所有子文件夹...

for /d %%i in (*) do (
    if exist "%%i\levelname.txt" (
        set "folder=%%i"
        set /p newname=<"%%i\levelname.txt"
        
        if not "!newname!"=="" (
            echo 将文件夹 "!folder!" 重命名为 "!newname!"
            ren "!folder!" "!newname!"
        ) else (
            echo 警告：文件夹 "!folder!" 中的 levelname.txt 为空，跳过。
        )
    ) else (
        echo 跳过：文件夹 "%%i" 中未找到 levelname.txt
    )
)

echo 处理完成！
pause
```

---

### 使用方法

1. 将上面的代码复制到一个文本文件中，保存为 `rename_folders.bat`
2. 把这个 `.bat` 文件放到**存放所有子文件夹的父目录**中
3. 双击运行即可

---

### ⚠️ 重要注意事项

1. **建议先备份**：重命名操作有一定风险，建议先备份你的地图文件夹。
2. **文件名冲突**：如果两个文件夹的 `levelname.txt` 内容相同，重命名时第二个会失败（因为同名文件夹已存在）。脚本没有处理这种情况，你可以考虑在重命名时加上序号或原文件夹名的一部分来避免。
3. **编码问题**：脚本设置了 `chcp 65001` 来支持 UTF-8 编码，但如果 `levelname.txt` 是其他编码（如 ANSI），可能会读取乱码。你需要根据实际情况调整编码。
4. **特殊字符**：如果 `levelname.txt` 中的内容包含 `\ / : * ? " < > |` 等Windows不允许作为文件名的字符，重命名会失败。

---

### 如果你需要更强的版本

如果你想要更健壮的版本（例如：处理重名冲突、保留原文件夹名作为备份、支持拖拽等），我可以进一步优化。你可以告诉我具体的使用场景，我来帮你完善。