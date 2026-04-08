import os
import re

directory = 'src'

replacements = {
    # Typography colors
    r'\btext-slate-500\b': 'text-[#85756F]',
    r'\btext-slate-600\b': 'text-[#85756F]',
    r'\btext-slate-700\b': 'text-[#85756F]',
    r'\btext-slate-800\b': 'text-[#1F2A44]',
    r'\btext-slate-900\b': 'text-[#1F2A44]',
    r'\bbg-slate-900\b': 'bg-[#1F2A44]',
    
    # Backgrounds
    r'\bbg-slate-50\b': 'bg-[#F5F5F5]',
    r'\bbg-slate-100\b': 'bg-[#EAF1FE]', # use light blue for slightly darker backgrounds
    r'\bborder-slate-200\b': 'border-[#EAF1FE]',
    r'\bborder-slate-100\b': 'border-[#F5F5F5]',
    
    # Secondary Gradients updates
    r'\bfrom-\[\#7aa0c9\]\b': 'from-[#4C8FD6]',
    r'\bfrom-\[\#4b6a94\]\b': 'from-[#4C8FD6]',
    r'\bto-\[\#7aa0c9\]\b': 'to-[#2EA3C7]',
    
    # Other legacy blueish backgrounds
    r'\bfrom-\[\#E0F2FE\]\b': 'from-[#EAF1FE]',
    r'\bvia-\[\#EAF6FF\]\b': 'via-[#F5F5F5]',
    r'\bto-\[\#F0F9FF\]\b': 'to-[#EAF1FE]',
    r'\bbg-\[\#EAF6FF\]\b': 'bg-[#EAF1FE]',
    
    # Shadows
    r'\bshadow-blue-100/50\b': 'shadow-[#4C8FD6]/20',
    r'\bshadow-blue-200\b': 'shadow-[#4C8FD6]/30',
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
