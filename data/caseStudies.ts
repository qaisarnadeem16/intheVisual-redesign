import bakery from '/public/assets/bakeryresult.png'
import knockout from '/public/assets/knockoutresult.png'
import kinetik from '/public/assets/kinetikresult.png'

export const caseStudies = [
    {
        "name": "Bare Naked Bakery",
        "slug": "bare-naked-bakery",
        "overview": {
            "title": "Overview",
            "content": "Bare Naked Bakery came to us with a mission: modernize their online store and offer a more personalized shopping experience. Their old site was static, hard to navigate, and lacked the ability for customers to customize products—a critical feature for a bakery offering personalized cakes and treats."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Outdated, cluttered Shopify theme",
                "Poor mobile responsiveness",
                "No product customization options",
                "Customers had to rely on phone calls or notes for special requests",
                "Low engagement and high bounce rate"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "Complete UX Overhaul",
                    "details": [
                        "Introduced a clean, modern layout inspired by top DTC bakery brands",
                        "Improved navigation for quick product discovery",
                        "Optimized for mobile and tablet responsiveness",
                        "Added clear CTAs and focused messaging"
                    ]
                },
                {
                    "step": "Custom Product Customizer Integration",
                    "details": [
                        "Built a visual product customizer allowing users to build cakes and cupcakes with options for flavors, toppings, colors, and sizes",
                        "Enabled real-time preview of customizations",
                        "Added personalized notes directly in the order flow"
                    ]
                }
            ],
            "key_features": [
                "Interactive Customizer: Built using Kickflip/Zakeke, tailored to bakery products",
                "Improved Checkout Flow: Fewer steps, clearer cart and shipping logic",
                "CMS Flexibility: Easy for the bakery team to update products, prices, and promotions"
            ]
        },
        "results": {
            "title": "The Results",
            "image": bakery,
            "points": [
                "+38% Increase in Time on Site",
                "+22% Lift in Average Order Value",
                "+45% Increase in Custom Cake Orders",
                "Mobile bounce rate dropped by 30%"
            ]
        }
    },
    {
        "name": "Knockout Fight Gear",
        "slug": "knockout-fight-gear",
        "overview": {
            "title": "Overview",
            "content": "Knockout Fight Gear is a brand that creates custom fight gear for athletes and enthusiasts. They needed a Shopify store that not only matched their bold identity but also allowed users to fully customize gear in real time, just like their top competitors."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Build a custom product customization flow similar to a major competitor",
                "Integrate complex dynamic pricing based on user selections",
                "Ensure the shopping experience was simple, fast, and on-brand",
                "Maintain clean visuals and usability across devices"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "UI/UX Design Overhaul",
                    "details": [
                        "Designed a sleek interface based on the client’s mockups",
                        "Maintained brand consistency with fonts, colors, logos, and imagery",
                        "Used an intuitive, mobile-friendly layout to simplify the buying journey"
                    ]
                },
                {
                    "step": "Interactive Product Customizer",
                    "details": [
                        "Built a React-based product customizer for selecting sizes, colors, and designs",
                        "Integrated real-time pricing updates based on selections",
                        "Displayed a clear breakdown in the Add to Cart summary"
                    ]
                },
                {
                    "step": "Enhanced Checkout Experience",
                    "details": [
                        "Streamlined the cart view with clear summaries of customizations and total costs",
                        "Used visual cues and friendly messaging to guide users smoothly to checkout"
                    ]
                },
                {
                    "step": "Brand Consistency & Optimization",
                    "details": [
                        "Highlighted high-quality visuals of gear",
                        "Ensured every touchpoint, from homepage to checkout, aligned with Knockout’s premium brand identity"
                    ]
                }
            ],
            "tech_stack": {
                "frontend": ["React JS", "Liquid", "HTML/CSS", "JavaScript", "jQuery"],
                "backend": ["Shopify API", "GraphQL"],
                "integrations": ["Email marketing", "Product reviews", "Secure payments"]
            }
        },
        "results": {
            "title": "The Results",
            "image": knockout,
            "points": [
                "Higher Engagement: More users engaged with the customization tools",
                "Better Conversions: Dynamic pricing and transparency helped reduce cart abandonment",
                "Increased Satisfaction: Customers praised the simpler, more intuitive shopping process"
            ]
        }
    },
    {
        "name": "Kinetik AdrenalinK",
        "slug": "kinetik-adrenalinx",
        "overview": {
            "title": "Overview",
            "content": "Kinetik AdrenalinK is a premium French performance apparel brand focused on trail running and high-intensity outdoor sports. They needed a Shopify store that reflected their innovation-driven identity and offered athletes the ability to personalize their gear with ease."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Build a visually bold, category-driven store aligned with Kinetik’s premium brand",
                "Develop tailored product personalization flows for both genders and all product types",
                "Ensure mobile optimization for on-the-go athletes and trail runners",
                "Boost performance, engagement, and trust through strategic app integrations"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "Design & UI/UX Customization",
                    "details": [
                        "Crafted a modern and energetic interface highlighting their flagship GELANOTS® jacket",
                        "Built strong visual hierarchy using bold fonts, clean layouts, and high-resolution product imagery",
                        "Showcased their full product range with intuitive navigation by category and gender"
                    ]
                },
                {
                    "step": "Custom Product Personalization",
                    "details": [
                        "Created category-specific personalization pages for apparel, with options for color, style, and custom text",
                        "Enabled users to visually customize products in real time, fostering deeper engagement and ownership"
                    ]
                },
                {
                    "step": "Mobile Optimization",
                    "details": [
                        "Delivered a seamless mobile shopping journey, improving interaction and reducing checkout friction",
                        "Ensured responsiveness across devices and browsers"
                    ]
                },
                {
                    "step": "App Integrations",
                    "details": [
                        "Klaviyo for personalized email marketing",
                        "Yotpo for customer reviews and social proof",
                        "Shopify Payments for a smooth, global checkout experience"
                    ]
                },
                {
                    "step": "Performance & SEO Enhancements",
                    "details": [
                        "Applied on-page SEO best practices",
                        "Improved load speeds by 35% to reduce bounce rates and increase user retention"
                    ]
                }
            ],
            "execution_process": [
                "In-depth brand and competitive analysis",
                "Custom theme design and UI planning",
                "Category-based personalization integration",
                "Mobile testing and checkout optimization",
                "Post-launch performance tracking and iteration"
            ]
        },
        "results": {
            "title": "The Results",
            "image":kinetik,
            "points": [
                "+40% Conversion Rate within 3 months",
                "+30% Engagement with personalized products",
                "+25% Trust Increase via Yotpo reviews",
                "+20% Average Order Value due to upsell personalization",
                "−35% Faster Site Load Times, resulting in lower bounce rates"
            ]
        }
    },
    {
        "name": "Medallion Rug",
        "slug": "medallion-rug",
        "overview": {
            "title": "Overview",
            "content": "Medallion Rug Gallery, a premium luxury rug retailer, approached us with a complex challenge: merge two separate websites—one for showcasing products and another for purchasing—into a unified, performance-optimized WordPress/WooCommerce platform. With over 3,000 products and a need for personalized sales flows, this project was as technical as it was visual."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Two disconnected websites causing confusion in user journey",
                "Over 3,000 rugs to migrate, optimize, and filter effectively",
                "High-resolution media and slow speeds impacting mobile experience",
                "No unified checkout or direct purchase flow for collectibles",
                "SEO and admin workflows were outdated and inefficient"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "Full CMS Migration + UI/UX Overhaul",
                    "details": [
                        "Rebuilt the site from a custom PHP setup into WordPress",
                        "Created a cohesive experience with modern design, consistent branding, and responsive layouts",
                        "Built 20+ page templates including custom layouts for interior design, collections, and educational blog content"
                    ]
                },
                {
                    "step": "Unified Product Gallery + Purchase Flow",
                    "details": [
                        "Merged two websites into one intuitive, WooCommerce-powered platform",
                        "Enabled visitors to view, filter, favorite, and request pricing—all in one place",
                        "Created a hybrid eCommerce model where collectible rugs, prompt a 'Request Price' flow, and other rugs are buyable directly"
                    ]
                },
                {
                    "step": "Advanced Filtering & Product Structure",
                    "details": [
                        "Integrated a powerful frontend filter based on 13+ product attributes (style, size, weave, foundation, condition, etc.)",
                        "Developed custom taxonomies and backend management tools for bulk uploads and edits",
                        "Built a wishlist system for logged-in users to save favorites"
                    ]
                },
                {
                    "step": "Performance Optimization + SEO Strategy",
                    "details": [
                        "Compressed high-resolution images without sacrificing quality",
                        "Applied Google Core Web Vitals best practices for speed",
                        "Enabled full metadata and structured data control via the admin dashboard"
                    ]
                },
                {
                    "step": "Custom 'Request for Price' Workflow",
                    "details": [
                        "No prices shown for premium collectible rugs",
                        "Users submit request forms, admin receives instant alert, custom invoice sent securely via payment link",
                        "Seamlessly blends storytelling, luxury presentation, and conversion strategy"
                    ]
                }
            ],
            "execution_process": [
                "Brand + UX audit and stakeholder interviews",
                "Wireframes and mockups across mobile and desktop",
                "Full CMS + data migration with no downtime",
                "Testing: filter logic, responsiveness, and multi-device checkout",
                "Launch + free 1-month support and ongoing monthly maintenance"
            ]
        },
        "results": {
            "title": "The Results",
            "points": [
                "Unified Experience: Customers can now explore and buy rugs in one streamlined journey",
                "+40% Faster Load Times with optimized galleries and images",
                "Improved Inventory Management: Easier product control, edits, and bulk uploads for 3,000+ items",
                "Boosted Conversion Confidence: 'Request for Price' model led to increased inquiries on premium listings",
                "Enhanced Mobile UX resulting in reduced bounce rates and longer session durations"
            ]
        }
    },
    {
        "name": "Bamboo Organizer",
        "slug": "bamboo-organizer",
        "overview": {
            "title": "Overview",
            "content": "Our client, a brand selling sustainable home goods, approached us with a clear objective: create a high-quality 3D animation that highlights the natural durability and eco-friendly appeal of their bamboo organizer. The animation was to be used for their Amazon listing and needed to stand out visually while showcasing product quality in a realistic setting."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Emphasize the 'Bamboo' identity visually while maintaining a premium look",
                "Create a product animation that feels both natural and modern",
                "Ensure a visually cohesive 3D room environment to frame the product",
                "Render in high resolution for commercial eCommerce use (Amazon)"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "3D Product Design & Modeling",
                    "details": [
                        "Started with a full 3D design of the product using Blender",
                        "Modeled precise geometry to match the real-world item’s dimensions and build",
                        "Applied organic forms to reflect the natural material of bamboo"
                    ]
                },
                {
                    "step": "Texture Mapping & Detailing",
                    "details": [
                        "Created and applied custom bamboo textures inside Blender",
                        "Focused on showcasing grain, polish, and finish quality to convey durability",
                        "Adjusted lighting and shaders to achieve a realistic, tactile look"
                    ]
                },
                {
                    "step": "Environment Creation",
                    "details": [
                        "Built a minimalistic room environment in Blender to showcase the product in context",
                        "Used neutral tones and soft lighting to keep focus on the product’s texture and form"
                    ]
                },
                {
                    "step": "Animation & Post-Production",
                    "details": [
                        "Animated product rotation and key interactions to highlight durability",
                        "Rendered the animation sequence using Blender’s Cycles engine",
                        "Added final polish, visual effects, and transitions in Adobe After Effects to enhance presentation quality"
                    ]
                }
            ]
        },
        "results": {
            "title": "The Results",
            "points": [
                "Delivered a crisp, high-end 3D product animation tailored for Amazon listing use",
                "Successfully highlighted the bamboo material’s natural elegance and strength",
                "Client was highly satisfied and immediately commissioned another 3D animation project"
            ],
            "final_video": "Bamboo_Organizer_Final_Video"
        }
    },
    {
        "name": "Ancient Dome Lodge Animation",
        "slug": "ancient-dome-lodge-animation",
        "overview": {
            "title": "Overview",
            "content": "The client approached us with a unique concept: create a realistic 3D animation that visualizes the step-by-step construction of an ancient Dome Lodge, using only tree trunks and traditional materials. The animation needed to strike a balance between historical authenticity and cinematic realism, set within a natural forest environment."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Visualize an ancient construction method using 3D animation",
                "Ensure the process felt organic and historically plausible",
                "Recreate a dense, believable forest setting to match the time period",
                "Integrate realistic cloth and smoke simulation for added immersion",
                "Synchronize the animation with voiceover narration for storytelling"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "3D Modeling & Structure Design",
                    "details": [
                        "Modeled the Dome Lodge’s frame piece-by-piece, preparing each element to be animated individually",
                        "Ensured the structure design adhered to ancient construction logic (no modern tools or fasteners)"
                    ]
                },
                {
                    "step": "Forest Environment Creation",
                    "details": [
                        "Designed a natural, earthy forest scene to serve as the backdrop",
                        "Used custom textures and volumetric lighting to simulate time-of-day mood and depth"
                    ]
                },
                {
                    "step": "Step-by-Step Animation",
                    "details": [
                        "Animated the gradual construction process: laying logs, shaping the dome, and securing the structure",
                        "Used timed build sequencing to reflect how ancient craftsmen may have worked"
                    ]
                },
                {
                    "step": "Cloth & Smoke Simulation",
                    "details": [
                        "Simulated fabric coverings for the dome to replicate real-world movement and behavior",
                        "Integrated light smoke effects from a central fire or work area to enhance realism"
                    ]
                },
                {
                    "step": "Voiceover & Final Render",
                    "details": [
                        "Synced the full animation with a clear, informative voiceover",
                        "Rendered in high quality, combining camera movements and transitions for a cinematic feel"
                    ]
                }
            ]
        },
        "results": {
            "title": "The Results",
            "points": [
                "Delivered a visually striking and educational animation of the Dome Lodge’s construction",
                "Realistic environment, material physics, and narration created an engaging storytelling experience",
                "Client was thoroughly impressed by the authenticity and attention to detail, and praised the realism of the build process"
            ],
            "final_video": "Lodge_Documentary"
        }
    },
    {
        "name": "Realistic Cinematic Animation",
        "slug": "realistic-cinematic-animation",
        "overview": {
            "title": "Overview",
            "content": "The client approached us with a dual-focused project: deliver high-fidelity, realistic 3D renders of the Porsche GT3 RS and Audi Tron, and produce a cinematic animation of the Porsche GT3 RS for Instagram promotion. The visual assets needed to reflect both luxury and performance, tailored for high-impact social and commercial use."
        },
        "challenge": {
            "title": "The Challenge",
            "points": [
                "Build a photorealistic 3D environment suitable for showcasing two premium car models",
                "Texture and light both vehicles accurately for real-world fidelity",
                "Create an engaging, cinematic 3D animation of the Porsche GT3 RS",
                "Utilize both Blender and Unreal Engine 5 effectively within a hybrid workflow",
                "Deliver polished visuals optimized for social media"
            ]
        },
        "solution": {
            "title": "Our Solution",
            "steps": [
                {
                    "step": "Environment Design & Vehicle Texturing in UE5",
                    "details": [
                        "Built a custom, photo-real urban and road environment using Unreal Engine 5",
                        "Applied reflective materials, dynamic lighting, and HDRI to ensure accurate real-world reflections",
                        "Textured both the Porsche GT3 RS and Audi Tron with attention to detail—materials, decals, paint layers, tire rubber, and trim"
                    ]
                },
                {
                    "step": "Rendering with UE5 Path Tracer",
                    "details": [
                        "Used UE5 Path Tracing for physically accurate light behavior and high-resolution rendering",
                        "Created camera compositions to highlight surface quality, contours, and lighting transitions"
                    ]
                },
                {
                    "step": "Cinematic Animation in Blender",
                    "details": [
                        "Developed a smooth camera rig inside Blender to animate dynamic panning shots of the Porsche",
                        "Used Cycles Render Engine for cinematic output, with motion blur, DOF, and lens flare effects",
                        "Created a 20–30 second promotional animation optimized for Instagram’s aspect ratios and flow"
                    ]
                }
            ],
            "software_render_engines": {
                "modeling_animation": "Blender",
                "rendering_environment": "Unreal Engine 5",
                "render_engines": ["Cycles (Blender)", "UE5 Path Tracing"]
            }
        },
        "results": {
            "title": "The Results",
            "points": [
                "Delivered stunning, photoreal 3D renders of both luxury cars in cinematic settings",
                "Created an Instagram-ready animation that captured the essence of speed, detail, and craftsmanship",
                "Client was extremely pleased with the output and used the assets across multiple promotional channels"
            ]
        }
    }

]
