import os
from PIL import Image, ImageDraw

def cubic_bezier(p0, p1, p2, p3, steps=100):
    points = []
    for i in range(steps + 1):
        t = i / steps
        x = (1-t)**3 * p0[0] + 3*(1-t)**2 * t * p1[0] + 3*(1-t) * t**2 * p2[0] + t**3 * p3[0]
        y = (1-t)**3 * p0[1] + 3*(1-t)**2 * t * p1[1] + 3*(1-t) * t**2 * p2[1] + t**3 * p3[1]
        points.append((x, y))
    return points

def draw_thick_curve(draw, points, color, radius):
    for x, y in points:
        draw.ellipse([x - radius, y - radius, x + radius, y + radius], fill=color)

def main():
    # 512x512 canvas for high quality rendering
    size = 512
    scale = size / 48.0
    
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Colors
    c_sage = (122, 139, 102, 255)       # #7a8b66
    c_navy = (45, 74, 93, 255)         # #2d4a5d
    c_terracotta = (201, 124, 109, 255)  # #C97C6D
    
    # Coordinates mapping helper
    def sc(pt):
        return (pt[0] * scale, pt[1] * scale)
        
    # --- 1. Sage Green Outer Circular Arc ---
    arc1 = cubic_bezier(sc((24, 6.5)), sc((14.3, 6.5)), sc((6.5, 14.3)), sc((6.5, 24)))
    arc2 = cubic_bezier(sc((6.5, 24)), sc((6.5, 31.8)), sc((11.6, 38.3)), sc((18.5, 40.5)))
    draw_thick_curve(draw, arc1 + arc2, c_sage, int(0.9 * scale))
    
    # --- 2. Supporting Hand (Navy Blue) ---
    hand_seg1 = cubic_bezier(sc((12.5, 32)), sc((12.5, 35.5)), sc((17.5, 39)), sc((24, 39)))
    hand_seg2 = cubic_bezier(sc((24, 39)), sc((27.5, 39)), sc((30.5, 37)), sc((32.5, 34)))
    hand_seg3 = cubic_bezier(sc((32.5, 34)), sc((28.5, 36.5)), sc((23.5, 36.5)), sc((18.5, 35)))
    hand_seg4 = cubic_bezier(sc((18.5, 35)), sc((15.5, 34)), sc((13.5, 32.5)), sc((12.5, 32)))
    hand_poly = hand_seg1 + hand_seg2 + hand_seg3 + hand_seg4
    draw.polygon(hand_poly, fill=c_navy)
    
    # --- 3. Left Abstract Figure (Sage Green) ---
    # Head
    hx, hy = sc((19.5, 14))
    hr = 2.2 * scale
    draw.ellipse([hx - hr, hy - hr, hx + hr, hy + hr], fill=c_sage)
    # Body
    b1 = cubic_bezier(sc((19.5, 17.5)), sc((16, 17.5)), sc((13.5, 21)), sc((13.5, 25.5)))
    b2 = cubic_bezier(sc((13.5, 25.5)), sc((13.5, 30)), sc((16.5, 34)), sc((20.5, 34)))
    b3 = cubic_bezier(sc((20.5, 34)), sc((18, 29.5)), sc((19.5, 25)), sc((24, 23.5)))
    b4 = cubic_bezier(sc((24, 23.5)), sc((21.5, 21)), sc((20.5, 18.5)), sc((19.5, 17.5)))
    draw.polygon(b1 + b2 + b3 + b4, fill=c_sage)
    
    # --- 4. Right Abstract Figure (Navy Blue) ---
    # Head
    hx2, hy2 = sc((28.5, 14))
    draw.ellipse([hx2 - hr, hy2 - hr, hx2 + hr, hy2 + hr], fill=c_navy)
    # Body
    r_b1 = cubic_bezier(sc((28.5, 17.5)), sc((32, 17.5)), sc((34.5, 21)), sc((34.5, 25.5)))
    r_b2 = cubic_bezier(sc((34.5, 25.5)), sc((34.5, 30)), sc((31.5, 34)), sc((27.5, 34)))
    r_b3 = cubic_bezier(sc((27.5, 34)), sc((30, 29.5)), sc((28.5, 25)), sc((24, 23.5)))
    r_b4 = cubic_bezier(sc((24, 23.5)), sc((26.5, 21)), sc((27.5, 18.5)), sc((28.5, 17.5)))
    draw.polygon(r_b1 + r_b2 + r_b3 + r_b4, fill=c_navy)
    
    # --- 5. Upper Right Branch Stem (Sage Green) ---
    stem = cubic_bezier(sc((24, 6.5)), sc((28, 6.5)), sc((33, 9.5)), sc((36.5, 14.5)))
    draw_thick_curve(draw, stem, c_sage, int(0.75 * scale))
    
    # --- 6. Leaves ---
    def draw_leaf(p_start, p_ctrl1, p_ctrl2, p_end, p_ctrl3, p_ctrl4, color):
        leaf_l = cubic_bezier(sc(p_start), sc(p_ctrl1), sc(p_ctrl2), sc(p_end))
        leaf_r = cubic_bezier(sc(p_end), sc(p_ctrl3), sc(p_ctrl4), sc(p_start))
        draw.polygon(leaf_l + leaf_r, fill=color)
        
    draw_leaf((26.5, 5), (26, 3), (27.5, 1.5), (29.5, 2), (29.5, 4), (28, 5.5), c_sage)
    draw_leaf((30.5, 6), (31, 4), (33, 3), (34.5, 4), (34, 6), (32, 7), c_sage)
    draw_leaf((33.5, 8.5), (35, 7), (37, 7), (38, 8.5), (36.5, 10), (34.5, 10), c_sage)
    draw_leaf((36, 11.5), (38, 10.5), (40, 11.5), (40.5, 13), (39, 14), (37, 13), c_sage)
    
    # Terracotta accent leaf
    draw_leaf((36.5, 14.5), (38.5, 15), (39.5, 17.5), (39.5, 19.5), (37.5, 19.5), (36.5, 17), c_terracotta)
    
    # Ensure public directory exists
    public_dir = "public"
    os.makedirs(public_dir, exist_ok=True)
    
    # Export sizes
    sizes = [16, 32, 48, 192]
    for s in sizes:
        resized_img = img.resize((s, s), Image.Resampling.LANCZOS)
        filename = os.path.join(public_dir, f"favicon-{s}x{s}.png")
        resized_img.save(filename, "PNG")
        print(f"Generated {filename}")
        
    # Export ICO
    ico_filename = os.path.join(public_dir, "favicon.ico")
    img.save(ico_filename, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Generated {ico_filename}")

if __name__ == "__main__":
    main()
