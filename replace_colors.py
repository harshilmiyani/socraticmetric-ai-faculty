import os
import re

directory = 'src'

# Old colors that might still be around:
# #0F2C4C -> #1F2A44 (Dark)
# #FF6B35 -> #F58022 (Orange)

replacements = {
    r'(?i)#0F2C4C': '#1F2A44',
    r'(?i)#FF6B35': '#F58022',
}

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            original = content
            for old, new in replacements.items():
                content = re.sub(old, new, content)
                
            if content != original:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {filepath}")
