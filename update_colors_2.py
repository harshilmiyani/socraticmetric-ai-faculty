import os
import re

directory = 'src'

replacements = {
    r'\btext-blue-500\b': 'text-[#3370F7]',
    r'\btext-blue-600\b': 'text-[#3370F7]',
    r'\bbg-blue-500\b': 'bg-[#3370F7]',
    r'\bbg-blue-600\b': 'bg-[#3370F7]',
    r'\bbg-blue-50\b': 'bg-[#EAF1FE]',
    r'\bbg-blue-100\b': 'bg-[#EAF1FE]',
    r'\btext-orange-500\b': 'text-[#F58022]',
    r'\bbg-orange-500\b': 'bg-[#F58022]',
    r'\bbg-orange-50\b': 'bg-[#F58022]/10',
    r'\bbg-orange-100\b': 'bg-[#F58022]/20',
}

def update_files():
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                original = content
                for old, new in replacements.items():
                    content = re.sub(old, new, content)
                    
                if content != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated UI colors in {filepath}")

if __name__ == '__main__':
    update_files()
