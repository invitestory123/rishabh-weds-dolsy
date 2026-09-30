import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
base = Image.new('RGBA', (W, H), (12, 10, 36, 255))

# Navy texture
try:
    tex = Image.open('public/assets/navy-texture.webp').convert('RGBA')
    tex = tex.resize((W, H), Image.Resampling.LANCZOS)
    base = Image.blend(base, tex, 0.45)
except Exception as e:
    print('Texture load error:', e)

# Add warm golden halo on left and right
glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse([60, 60, 650, 580], fill=(226, 200, 143, 35))
glow_draw.ellipse([680, 40, 1180, 590], fill=(238, 178, 192, 40))
glow = glow.filter(ImageFilter.GaussianBlur(60))
base = Image.alpha_composite(base, glow)

# Right side: Arched Photo of Rishabh & Dolsy
photo_w, photo_h = 410, 530
photo_x, photo_y = 745, 50

# Create arched mask
mask = Image.new('L', (photo_w, photo_h), 0)
mask_draw = ImageDraw.Draw(mask)
arch_r = photo_w // 2
mask_draw.ellipse([0, 0, photo_w, photo_w], fill=255)
mask_draw.rectangle([0, arch_r, photo_w, photo_h], fill=255)

# Load couple photo
try:
    c_photo = Image.open('public/assets/rishabh-dolsy-portrait.jpg').convert('RGBA')
    scale = max(photo_w / c_photo.width, photo_h / c_photo.height)
    new_size = (int(c_photo.width * scale), int(c_photo.height * scale))
    c_photo = c_photo.resize(new_size, Image.Resampling.LANCZOS)
    left = (c_photo.width - photo_w) // 2
    top = int((c_photo.height - photo_h) * 0.08)
    c_photo = c_photo.crop((left, top, left + photo_w, top + photo_h))

    # Outer glowing arch halo
    frame_glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    fg_draw = ImageDraw.Draw(frame_glow)
    fg_draw.ellipse([photo_x - 14, photo_y - 14, photo_x + photo_w + 14, photo_y + photo_w + 14], fill=(226, 200, 143, 90))
    fg_draw.rectangle([photo_x - 14, photo_y + arch_r, photo_x + photo_w + 14, photo_y + photo_h + 14], fill=(226, 200, 143, 90))
    frame_glow = frame_glow.filter(ImageFilter.GaussianBlur(16))
    base = Image.alpha_composite(base, frame_glow)

    # Paste photo with arch mask
    base.paste(c_photo, (photo_x, photo_y), mask)

    # Double gold arch border
    b_draw = ImageDraw.Draw(base)
    b_draw.arc([photo_x - 4, photo_y - 4, photo_x + photo_w + 4, photo_y + photo_w + 4], 180, 0, fill=(226, 200, 143, 245), width=3)
    b_draw.line([photo_x - 4, photo_y + arch_r, photo_x - 4, photo_y + photo_h + 4], fill=(226, 200, 143, 245), width=3)
    b_draw.line([photo_x + photo_w + 4, photo_y + arch_r, photo_x + photo_w + 4, photo_y + photo_h + 4], fill=(226, 200, 143, 245), width=3)
    b_draw.line([photo_x - 4, photo_y + photo_h + 4, photo_x + photo_w + 4, photo_y + photo_h + 4], fill=(226, 200, 143, 245), width=3)

    b_draw.arc([photo_x + 6, photo_y + 6, photo_x + photo_w - 6, photo_y + photo_w - 6], 180, 0, fill=(246, 226, 174, 190), width=1)
    b_draw.line([photo_x + 6, photo_y + arch_r, photo_x + 6, photo_y + photo_h - 6], fill=(246, 226, 174, 190), width=1)
    b_draw.line([photo_x + photo_w - 6, photo_y + arch_r, photo_x + photo_w - 6, photo_y + photo_h - 6], fill=(246, 226, 174, 190), width=1)
    b_draw.line([photo_x + 6, photo_y + photo_h - 6, photo_x + photo_w - 6, photo_y + photo_h - 6], fill=(246, 226, 174, 190), width=1)
except Exception as e:
    print('Photo crop error:', e)

# Top garland header — only very top horizontal row of blossoms (no hanging strings)
try:
    garland = Image.open('public/assets/garland-top.webp').convert('RGBA')
    # Crop just the top 135px of garland which is the dense top flower crown
    garland_top = garland.crop((0, 0, garland.width, 135))
    gt_w = 1200
    gt_h = int(garland_top.height * (gt_w / garland_top.width))
    garland_top = garland_top.resize((gt_w, gt_h), Image.Resampling.LANCZOS)
    base.paste(garland_top, (0, 0), garland_top)
except Exception as e:
    print('Garland load error:', e)

# Double golden outer card border
card_draw = ImageDraw.Draw(base)
card_draw.rectangle([18, 18, W - 18, H - 18], outline=(226, 200, 143, 160), width=2)
card_draw.rectangle([24, 24, W - 24, H - 24], outline=(238, 178, 192, 100), width=1)
for cx, cy in [(18, 18), (W - 18, 18), (18, H - 18), (W - 18, H - 18)]:
    card_draw.ellipse([cx - 4, cy - 4, cx + 4, cy + 4], fill=(246, 226, 174, 240))

# Ganesha emblem with glowing circular backdrop
try:
    ganesha = Image.open('public/assets/ganesha.png').convert('RGBA')
    ganesha = ganesha.resize((60, 60), Image.Resampling.LANCZOS)
    
    # Backing disc for Ganesha
    g_draw = ImageDraw.Draw(base)
    g_draw.ellipse([85, 110, 155, 180], fill=(24, 20, 54, 230), outline=(226, 200, 143, 190), width=1)
    base.paste(ganesha, (90, 115), ganesha)
except Exception as e:
    print('Ganesha load error:', e)

# Fonts
f_script = ImageFont.truetype('greatvibes.ttf', 76)
f_hindi = ImageFont.truetype('C:/Windows/Fonts/Nirmala.ttc', 22)
f_serif_xl = ImageFont.truetype('C:/Windows/Fonts/georgiab.ttf', 24)
f_serif_lg = ImageFont.truetype('C:/Windows/Fonts/georgiab.ttf', 20)
f_sans_sm = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 12)
f_sans_xs = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 11)

draw = ImageDraw.Draw(base)

# Sanskrit Shloka in Nirmala (Devanagari)
draw.text((170, 130), '॥ श्री गणेशाय नमः ॥', fill=(246, 226, 174, 255), font=f_hindi)

# Invitation lead-in
draw.text((85, 195), 'THE ROYAL WEDDING OF', fill=(245, 238, 226, 200), font=f_sans_sm)
draw.line([85, 214, 345, 214], fill=(226, 200, 143, 150), width=1)

# Couple Names in GreatVibes with subtle drop shadow
draw.text((88, 222), 'Rishabh & Dolsy', fill=(6, 4, 16, 240), font=f_script)
draw.text((85, 220), 'Rishabh & Dolsy', fill=(246, 226, 174, 255), font=f_script)

# Subtitle quote
draw.text((88, 312), '"Forever Begins Here"', fill=(238, 178, 192, 240), font=f_serif_lg)
draw.line([85, 348, 520, 348], fill=(226, 200, 143, 160), width=1)

# Date badge
draw.text((85, 368), 'DATE OF CELEBRATION', fill=(226, 200, 143, 180), font=f_sans_xs)
draw.text((85, 386), '6th – 7th December 2026', fill=(255, 255, 255, 250), font=f_serif_xl)

# Venue details
draw.text((85, 434), 'ROYAL DESTINATION', fill=(226, 200, 143, 180), font=f_sans_xs)
draw.text((85, 452), 'Lal Vilas · Neemrana, Rajasthan', fill=(246, 226, 174, 245), font=f_serif_xl)
draw.text((85, 484), 'Delhi – Jaipur Highway (NH-48)', fill=(245, 238, 226, 170), font=f_sans_sm)

# Hashtag & Monogram Badges
draw.rectangle([85, 526, 310, 568], outline=(226, 200, 143, 160), fill=(24, 20, 54, 220), width=1)
draw.text((105, 539), '#RishabhWedsDolsy', fill=(246, 226, 174, 240), font=f_sans_sm)

draw.rectangle([325, 526, 525, 568], outline=(238, 178, 192, 160), fill=(24, 20, 54, 220), width=1)
draw.text((342, 539), 'R · D  WEDDING 2026', fill=(238, 178, 192, 240), font=f_sans_sm)

# Convert to RGB for saving
rgb_base = base.convert('RGB')

# 1. Lossless PNG
base.save('public/assets/og-image.png', 'PNG', optimize=True)

# 2. Lossless WebP
rgb_base.save('public/assets/og-image.webp', 'WEBP', lossless=True, quality=100)

# 3. Maximum Fidelity JPEG (subsampling=0 4:4:4, optimize=True, progressive=True, quality=96)
rgb_base.save('public/assets/og-image.jpg', 'JPEG', quality=96, subsampling=0, optimize=True, progressive=True)

# Also update dist/assets
if os.path.exists('dist/assets'):
    base.save('dist/assets/og-image.png', 'PNG', optimize=True)
    rgb_base.save('dist/assets/og-image.webp', 'WEBP', lossless=True, quality=100)
    rgb_base.save('dist/assets/og-image.jpg', 'JPEG', quality=96, subsampling=0, optimize=True, progressive=True)

print('Generated clean og-image.png, og-image.webp, and og-image.jpg!')
