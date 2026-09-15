---
sidebar_position: 2
---

# 将世界文件夹下的所有.mcfunction内容提取到哪指定文件中

## 需求由来

由于中国版加入了较为严格的屏蔽词审查，需要将所有的.mcfunction的内容提取出来交审查屏蔽词。

## DeepSeek老师实现

```python
import os
import argparse

def extract_commands(directory, output_file):
    """
    从指定目录及其子目录中提取所有.mcfunction文件的命令，排除注释，并保存到输出文件。
    
    :param directory: 要搜索的目录路径
    :param output_file: 输出文件的路径
    """
    commands = []
    
    # 遍历目录及其子目录
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.mcfunction')|file.endswith('zh_CN.lang'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    for line in f:
                        # 移除行内注释并清理空白
                        command = line.split('#', 1)[0].strip()
                        if command:  # 忽略空行
                            commands.append(command)
    
    # 将命令写入输出文件
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(commands))

def main():
    parser = argparse.ArgumentParser(description='提取.mcfunction文件中的命令并导出到文本文件')
    """
    使用示例
    cmd
    python script.py -d /path/to/directory -o commands.txt
    """
    parser.add_argument('-d', '--directory', default='.', 
                        help='要处理的目录路径（默认为当前目录）')
    parser.add_argument('-o', '--output', default='output.txt',
                        help='输出文件名（默认为output.txt）')
    
    args = parser.parse_args()
    
    extract_commands(args.directory, args.output)
    print(f"成功提取命令到文件: {args.output}")

if __name__ == "__main__":
    main()
```


