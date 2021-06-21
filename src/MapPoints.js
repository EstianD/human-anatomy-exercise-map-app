const HIGHLIGHT_COLOR = "rgba(136, 8, 8, 0.3)";
const BORDER_COLOR = "rgba(136, 8, 8, 0.6)";
const BORDER_WIDTH = 1;

export function MapPoints() {
  const MAP = {
    name: "human-map",
    areas: [
      {
        name: "Pectoralis major",
        shape: "poly",
        coords: [
          114, 168, 116, 179, 121, 186, 127, 192, 135, 193, 144, 193, 155, 189,
          163, 188, 171, 187, 179, 189, 187, 192, 195, 189, 202, 187, 209, 182,
          212, 174, 213, 164, 211, 155, 203, 144, 191, 137, 181, 133, 171, 135,
          163, 137, 153, 135, 143, 135, 133, 137, 124, 143, 118, 155,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Pectoralis major</h4><p>Pectoralis major is a thick, fan-shaped muscle contributing to the thoracobrachial motion. It consists of a clavicular part and a sternal part, both converging to a flat tendon that inserts on the humerus. It’s innervated by both medial and lateral pectoral nerves.</p>`,
      },
      {
        name: "Biceps brachii right",
        shape: "poly",
        coords: [
          110, 175, 95, 187, 89, 202, 86, 217, 86, 235, 90, 244, 101, 238, 105,
          226, 113, 212, 114, 195,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Biceps brachii</h4><p>The biceps is a muscle on the front part of the upper arm. The biceps includes a “short head” and a “long head” that work as a single muscle.</p><p>The biceps is attached to the arm bones by tough connective tissues called tendons. The tendons that connect the biceps muscle to the shoulder joint in two places are called the proximal biceps tendons. The tendon that attaches the biceps muscle to the forearm bones (radius and ulna) is called the distal biceps tendon. When the biceps contracts, it pulls the forearm up and rotates it outward.</p>`,
      },
      {
        name: "Biceps brachii left",
        shape: "poly",
        coords: [
          217, 173, 215, 180, 216, 194, 214, 204, 213, 212, 222, 229, 227, 235,
          234, 243, 238, 232, 238, 214, 235, 200, 229, 186,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Biceps brachii</h4><p>The biceps is a muscle on the front part of the upper arm. The biceps includes a “short head” and a “long head” that work as a single muscle.</p><p>The biceps is attached to the arm bones by tough connective tissues called tendons. The tendons that connect the biceps muscle to the shoulder joint in two places are called the proximal biceps tendons. The tendon that attaches the biceps muscle to the forearm bones (radius and ulna) is called the distal biceps tendon. When the biceps contracts, it pulls the forearm up and rotates it outward.</p>`,
      },
      {
        name: "Anterior deltoid right",
        shape: "poly",
        coords: [
          91, 200, 97, 188, 104, 180, 111, 172, 115, 159, 121, 147, 132, 134,
          117, 136, 113, 131, 102, 137, 94, 146, 89, 160, 89, 177,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Deltoid</h4><p>The Deltoid muscle is a large triangular shaped muscle which lies over the glenohumeral joint and which gives the shoulder its rounded contour. It is named after the Greek letter delta, which is shaped like an equilateral triangle. It comprises 3 distinct portions each of which produces a different movement of the glenohumeral joint, commonly named the anterior, mid (or lateral) and posterior heads.</p>`,
      },
      {
        name: "Anterior deltoid left",
        shape: "poly",
        coords: [
          229, 188, 222, 178, 215, 169, 215, 157, 206, 145, 191, 135, 206, 133,
          215, 130, 226, 137, 233, 143, 238, 153, 239, 169, 237, 184, 235, 200,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Deltoid</h4><p>The Deltoid muscle is a large triangular shaped muscle which lies over the glenohumeral joint and which gives the shoulder its rounded contour. It is named after the Greek letter delta, which is shaped like an equilateral triangle. It comprises 3 distinct portions each of which produces a different movement of the glenohumeral joint, commonly named the anterior, mid (or lateral) and posterior heads.</p>`,
      },
      {
        name: "Anterior deltoid back right",
        shape: "poly",
        coords: [
          341, 182, 347, 163, 353, 154, 360, 147, 369, 145, 387, 140, 374, 137,
          358, 133, 349, 139, 342, 150, 340, 163,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Deltoid</h4><p>The Deltoid muscle is a large triangular shaped muscle which lies over the glenohumeral joint and which gives the shoulder its rounded contour. It is named after the Greek letter delta, which is shaped like an equilateral triangle. It comprises 3 distinct portions each of which produces a different movement of the glenohumeral joint, commonly named the anterior, mid (or lateral) and posterior heads.</p>`,
      },
      {
        name: "Anterior deltoid back left",
        shape: "poly",
        coords: [
          491, 175, 490, 153, 486, 143, 481, 138, 473, 133, 460, 137, 445, 140,
          459, 146, 470, 148, 478, 154, 485, 163,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Deltoid</h4><p>The Deltoid muscle is a large triangular shaped muscle which lies over the glenohumeral joint and which gives the shoulder its rounded contour. It is named after the Greek letter delta, which is shaped like an equilateral triangle. It comprises 3 distinct portions each of which produces a different movement of the glenohumeral joint, commonly named the anterior, mid (or lateral) and posterior heads.</p>`,
      },
      {
        name: "Serratus anterior right",
        shape: "poly",
        coords: [
          137, 193, 130, 193, 123, 187, 117, 172, 114, 187, 113, 200, 119, 213,
          123, 204,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Serratus anterior</h4><p>The serratus anterior muscle is a fan-shaped muscle at the lateral wall of the thorax. Its main part lies deep under the scapula and the pectoral muscles. It is easy to palpate between the pectoralis major and latissimus dorsi muscles.</p>`,
      },
      {
        name: "Serratus anterior left",
        shape: "poly",
        coords: [
          212, 173, 215, 186, 214, 203, 212, 211, 211, 214, 210, 204, 207, 197,
          203, 194, 193, 190, 200, 187, 207, 183, 208, 180, 214, 172,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Serratus anterior</h4><p>The serratus anterior muscle is a fan-shaped muscle at the lateral wall of the thorax. Its main part lies deep under the scapula and the pectoral muscles. It is easy to palpate between the pectoralis major and latissimus dorsi muscles.</p>`,
      },
      {
        name: "Triceps brachii left",
        shape: "poly",
        coords: [
          362, 251, 365, 238, 366, 227, 369, 215, 371, 198, 369, 181, 360, 166,
          348, 161, 345, 173, 342, 183, 342, 196, 340, 211, 341, 225, 343, 236,
          350, 242,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Triceps brachii</h4><p>The triceps brachii is a major muscle of the upper arm in the human body. The triceps run along the humerus (the main bone of the upper arm) between the shoulder and the elbow. Along with the biceps, it enables extension and retraction of the forearm. When the triceps are contracted, the forearm extends and the elbow straightens; if the triceps are relaxed and the biceps flexed, the forearm retracts and the elbow bends. The triceps also serve to stabilize the shoulder joint at the top of the humerus.</p>`,
      },
      {
        name: "Triceps brachii right",
        shape: "poly",
        coords: [
          470, 255, 469, 235, 466, 221, 462, 206, 460, 192, 465, 179, 471, 167,
          479, 163, 486, 165, 491, 173, 491, 188, 493, 199, 494, 213, 493, 226,
          492, 235, 486, 243,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Triceps brachii</h4><p>The triceps brachii is a major muscle of the upper arm in the human body. The triceps run along the humerus (the main bone of the upper arm) between the shoulder and the elbow. Along with the biceps, it enables extension and retraction of the forearm. When the triceps are contracted, the forearm extends and the elbow straightens; if the triceps are relaxed and the biceps flexed, the forearm retracts and the elbow bends. The triceps also serve to stabilize the shoulder joint at the top of the humerus.</p>`,
      },
      {
        name: "Rectus abdominis",
        shape: "poly",
        coords: [
          164, 188, 156, 189, 144, 194, 139, 203, 139, 214, 138, 225, 138, 237,
          141, 248, 145, 272, 155, 298, 161, 312, 166, 316, 171, 313, 177, 304,
          183, 290, 187, 275, 189, 263, 188, 249, 190, 234, 191, 218, 193, 206,
          191, 197, 186, 191, 175, 188,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Rectus abdominis</h4><p>Informally known as the abs muscle, is a long muscle of the anterior abdominal wall. In those with low body fat, it is clearly visible beneath the skin forming the ‘six pack’. It extends from the rib cage all the way to the pubic bone. </p><p>Rectus abdominis belongs to the anterior abdominal muscles together with pyramidalis muscle. But taking the functional anatomy into account, these two muscles comprise the anterolateral abdominal wall along with the three lateral abdominal muscles; external oblique, internal oblique and transversus abdominis.</p>`,
      },
      {
        name: "Gastrocnemius left",
        shape: "poly",
        coords: [
          389, 415, 384, 433, 380, 444, 379, 459, 378, 479, 381, 496, 389, 517,
          397, 533, 402, 549, 406, 561, 408, 569, 413, 576, 414, 569, 412, 542,
          414, 525, 415, 512, 416, 501, 416, 490, 415, 474, 411, 458, 408, 448,
          401, 436,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Gastrocnemius</h4><p>Gastrocnemius is a large muscle located in the posterior leg. Posteriorly, is the most superficial of the muscles of the leg, and forms the bulk of the calf.</p><p>In conjunction with the soleus muscle, it is a component of a composite, three-headed group of muscles referred to as triceps surae. Together, they act in many basic activities, such as walking, running and leaping.</p>`,
      },
      {
        name: "Gastrocnemius right",
        shape: "poly",
        coords: [
          447, 412, 442, 426, 438, 434, 431, 445, 425, 453, 424, 464, 423, 476,
          421, 492, 422, 505, 424, 520, 427, 534, 427, 549, 427, 562, 430, 577,
          433, 568, 437, 548, 439, 534, 443, 521, 452, 506, 457, 492, 457, 469,
          454, 448, 453, 433,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Gastrocnemius</h4><p>Gastrocnemius is a large muscle located in the posterior leg. Posteriorly, is the most superficial of the muscles of the leg, and forms the bulk of the calf.</p><p>In conjunction with the soleus muscle, it is a component of a composite, three-headed group of muscles referred to as triceps surae. Together, they act in many basic activities, such as walking, running and leaping.</p>`,
      },
      {
        name: "Gluteus maximus",
        shape: "poly",
        coords: [
          421, 306, 411, 291, 403, 282, 393, 279, 383, 279, 375, 288, 369, 301,
          366, 315, 361, 324, 359, 338, 363, 370, 365, 347, 366, 331, 369, 321,
          373, 335, 375, 360, 379, 345, 389, 339, 400, 339, 411, 335, 416, 328,
          422, 335, 440, 337, 453, 338, 458, 344, 458, 362, 461, 380, 465, 359,
          467, 335, 465, 317, 463, 305, 458, 294, 451, 282, 444, 279, 432, 291,
          426, 298, 422, 302,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Gluteus Maximus</h4><p>Gluteus Maximus the largest and heaviest muscle in the body. It is the most superficial of all gluteal muscles that are located at the posterior aspect of the hip joint. This makes it the largest muscle at the hip representing 16% of the total cross-sectional area (TCSA).</p><p>Gluteus Maximus's size allows it to generate a large amount of force. The muscle evolved from an adductor of the hip which is still seen in lower primates today. The development of the muscle's function is associated with the erect posture and changes to the pelvis. It now functions to maintain the erect posture as one of the muscles that extends the hip joint.</p>`,
      },
      {
        name: "Trapezius back",
        shape: "poly",
        coords: [
          429, 97, 423, 88, 416, 85, 408, 91, 398, 104, 386, 114, 376, 122, 358,
          133, 369, 135, 386, 137, 387, 146, 387, 161, 389, 177, 391, 189, 398,
          200, 405, 211, 411, 224, 418, 228, 422, 221, 425, 211, 432, 196, 440,
          181, 443, 163, 443, 150, 446, 140, 460, 137, 470, 134, 451, 123, 442,
          114, 435, 108,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Trapezius</h4><p>The trapezius muscle is a large, triangular, paired muscle located on the posterior aspect of the neck and thorax. When viewed together, this pair forms a diamond or trapezoid shape, hence its name. The trapezius has many attachment points, extending from the skull and vertebral column to the shoulder girdle.</p><p>The trapezius belongs to the superficial layer of the extrinsic muscles of the back, along with latissimus dorsi, rhomboid major and minor, and levator scapulae muscles. The trapezius is largely involved in movements of the shoulder girdle, and is therefore functionally considered as a muscle of the upper limb rather than of the back.</p>`,
      },
      {
        name: "Quadriceps femoris right",
        shape: "poly",
        coords: [
          130, 289, 129, 306, 119, 323, 112, 340, 109, 351, 110, 360, 112, 376,
          116, 393, 120, 412, 122, 428, 127, 438, 138, 440, 150, 435, 158, 427,
          158, 418, 157, 407, 157, 394, 154, 379, 151, 363, 147, 347, 140, 321,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Quadriceps femoris</h4><p>The quadriceps femoris muscle, commonly known as the quad muscle, is the strongest muscle of the human body. It is located in the anterior compartment of the thigh, together with the sartorius.</p><p>The quadriceps femoris muscle translates to “four-headed muscle” from Latin. It bears this name because it consists of four individual muscles; rectus femoris, vastus medialis, vastus lateralis, and vastus intermedius. Out of all four muscles, only the rectus femoris crosses both the hip and knee joints. The others cross only the knee joint. These muscles differ in their origin, but share a common quadriceps femoris tendon which inserts into the patella. The function of the quadriceps femoris muscle is to extend the leg at the knee joint and to flex the thigh at the hip joint. </p>`,
      },
      {
        name: "Quadriceps femoris left",
        shape: "poly",
        coords: [
          203, 290, 200, 306, 198, 318, 194, 329, 190, 340, 183, 355, 176, 376,
          172, 390, 169, 403, 169, 421, 171, 428, 176, 431, 184, 432, 191, 432,
          196, 431, 200, 427, 203, 418, 207, 406, 211, 389, 215, 371, 217, 354,
          217, 337, 212, 320, 207, 305,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Quadriceps femoris</h4><p>The quadriceps femoris muscle, commonly known as the quad muscle, is the strongest muscle of the human body. It is located in the anterior compartment of the thigh, together with the sartorius.</p><p>The quadriceps femoris muscle translates to “four-headed muscle” from Latin. It bears this name because it consists of four individual muscles; rectus femoris, vastus medialis, vastus lateralis, and vastus intermedius. Out of all four muscles, only the rectus femoris crosses both the hip and knee joints. The others cross only the knee joint. These muscles differ in their origin, but share a common quadriceps femoris tendon which inserts into the patella. The function of the quadriceps femoris muscle is to extend the leg at the knee joint and to flex the thigh at the hip joint. </p>`,
      },
      {
        name: "Biceps femoris left",
        shape: "poly",
        coords: [
          412, 330, 408, 336, 396, 340, 384, 340, 379, 346, 376, 357, 375, 371,
          375, 384, 375, 401, 375, 414, 376, 431, 379, 443, 384, 427, 390, 415,
          394, 424, 401, 435, 408, 451, 411, 420, 411, 393, 412, 372, 414, 360,
          415, 347, 412, 328,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Biceps femoris</h4><p>Biceps femoris is a long muscle of the posterior aspect of the thigh. Together with the semitendinosus and semimembranosus muscles, it makes the group of muscles commonly known as the hamstrings.</p><p>Biceps femoris muscle runs from the ischial tuberosity, all the way to the proximal part of the fibula. In doing so the muscle crosses two joints; the hip joint and the knee joint. Acting simultaneously on these joints, biceps femoris has many important functions; flexion and external rotation at the knee joint, extension and external rotation in the hip joint.</p>`,
      },
      {
        name: "Biceps femoris right",
        shape: "poly",
        coords: [
          460, 347, 457, 340, 450, 339, 440, 337, 433, 336, 422, 334, 415, 327,
          414, 342, 415, 365, 419, 383, 419, 401, 418, 416, 421, 435, 425, 454,
          435, 437, 442, 425, 447, 409, 450, 423, 454, 435, 456, 409, 458, 386,
          460, 371, 460, 365, 461, 358,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Biceps femoris</h4><p>Biceps femoris is a long muscle of the posterior aspect of the thigh. Together with the semitendinosus and semimembranosus muscles, it makes the group of muscles commonly known as the hamstrings.</p><p>Biceps femoris muscle runs from the ischial tuberosity, all the way to the proximal part of the fibula. In doing so the muscle crosses two joints; the hip joint and the knee joint. Acting simultaneously on these joints, biceps femoris has many important functions; flexion and external rotation at the knee joint, extension and external rotation in the hip joint.</p>`,
      },
      {
        name: "Latissimus dorsi left",
        shape: "poly",
        coords: [
          387, 178, 376, 179, 369, 178, 370, 188, 370, 203, 369, 218, 376, 241,
          386, 258, 389, 272, 391, 274, 394, 258, 396, 245, 401, 237, 408, 231,
          410, 224, 407, 214, 400, 206, 396, 197, 391, 187,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Latissimus dorsi</h4><p>The latissimus dorsi muscle (AKA: 'the lats muscle' or 'the lats') is the widest muscle in the human body. It is relatively thin and covers almost all back muscles at the posterior trunk, except the trapezius.</p><p>Functionally, the latissimus dorsi muscle belongs to the muscles of the scapular motion. This muscle is able to pull the inferior angle of the scapula in various directions, producing movements on the shoulder joint; internal rotation, adduction and extension of the arm. Moreover, it is an accessory respiratory muscle, as well as one of the main stabilizers of the spine during its various movements.</p>`,
      },
      {
        name: "Latissimus dorsi right",
        shape: "poly",
        coords: [
          442, 177, 450, 181, 457, 182, 463, 179, 460, 192, 460, 207, 457, 221,
          457, 238, 456, 246, 451, 260, 450, 272, 446, 267, 440, 256, 436, 245,
          432, 235, 426, 228, 423, 224, 422, 215, 425, 207, 433, 194, 437, 187,
          437, 187,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "right",
        description: `<h4>Latissimus dorsi</h4><p>The latissimus dorsi muscle (AKA: 'the lats muscle' or 'the lats') is the widest muscle in the human body. It is relatively thin and covers almost all back muscles at the posterior trunk, except the trapezius.</p><p>Functionally, the latissimus dorsi muscle belongs to the muscles of the scapular motion. This muscle is able to pull the inferior angle of the scapula in various directions, producing movements on the shoulder joint; internal rotation, adduction and extension of the arm. Moreover, it is an accessory respiratory muscle, as well as one of the main stabilizers of the spine during its various movements.</p>`,
      },
      {
        name: "Brachialis right",
        shape: "poly",
        coords: [
          115, 203, 113, 215, 105, 222, 102, 232, 96, 238, 101, 243, 108, 252,
          109, 235, 110, 225,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Brachialis</h4><p>The brachialis muscle is a prime flexor of the forearm at the elbow joint. It is fusiform in shape and located in the anterior (flexor) compartment of the arm, deep to the biceps brachii. The brachialis is a broad muscle, with its broadest part located in the middle rather than at either of its extremities.</p><p>It is sometimes divided into two parts, and may fuse with the fibers of the biceps brachii, coracobrachialis, or pronator teres muscles. It also functions to form part of the floor of the cubital fossa.</p>`,
      },
      {
        name: "Brachialis left",
        shape: "poly",
        coords: [
          212, 213, 218, 220, 221, 227, 226, 235, 221, 241, 215, 253, 214, 242,
          214, 230,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Brachialis</h4><p>The brachialis muscle is a prime flexor of the forearm at the elbow joint. It is fusiform in shape and located in the anterior (flexor) compartment of the arm, deep to the biceps brachii. The brachialis is a broad muscle, with its broadest part located in the middle rather than at either of its extremities.</p><p>It is sometimes divided into two parts, and may fuse with the fibers of the biceps brachii, coracobrachialis, or pronator teres muscles. It also functions to form part of the floor of the cubital fossa.</p>`,
      },
      {
        name: "Obliquus externus abdominis right",
        shape: "poly",
        coords: [
          145, 191, 136, 209, 133, 227, 134, 241, 136, 254, 138, 282, 131, 275,
          124, 270, 119, 265, 117, 252, 120, 240, 120, 225, 119, 209, 124, 202,
          130, 195,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Obliquus externus abdominis</h4><p>External abdominal oblique is a paired muscle located on the lateral sides of the abdominal wall. Along with internal abdominal oblique and transversus abdominis, it comprises the lateral abdominal muscles. In a broader picture, these muscles make up the anterolateral abdominal wall together with two anterior abdominal muscles; the rectus abdominis and pyramidalis.</p><p>Abdominal muscles work together to produce movements of the spine as well as to compress the abdominal viscera. External abdominal oblique in particular causes ipsilateral lateral flexion of the trunk and contralateral rotation of the trunk when it contracts unilaterally. Bilateral contraction flexes the trunk anteriorly, increasing intra abdominal pressure, which is useful in processes such as breathing, singing and defecation.</p>`,
      },
      {
        name: "Obliquus externus abdominis left",
        shape: "poly",
        coords: [
          214, 194, 204, 195, 193, 191, 194, 199, 196, 211, 194, 224, 193, 237,
          193, 249, 193, 263, 194, 284, 201, 277, 205, 267, 204, 251, 204, 238,
          205, 225, 211, 213, 214, 203,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Obliquus externus abdominis</h4><p>External abdominal oblique is a paired muscle located on the lateral sides of the abdominal wall. Along with internal abdominal oblique and transversus abdominis, it comprises the lateral abdominal muscles. In a broader picture, these muscles make up the anterolateral abdominal wall together with two anterior abdominal muscles; the rectus abdominis and pyramidalis.</p><p>Abdominal muscles work together to produce movements of the spine as well as to compress the abdominal viscera. External abdominal oblique in particular causes ipsilateral lateral flexion of the trunk and contralateral rotation of the trunk when it contracts unilaterally. Bilateral contraction flexes the trunk anteriorly, increasing intra abdominal pressure, which is useful in processes such as breathing, singing and defecation.</p>`,
      },
      {
        name: "Trapezius front right",
        shape: "poly",
        coords: [
          143, 109, 145, 119, 145, 131, 136, 133, 122, 134, 109, 133, 123, 124,
          133, 117,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Trapezius</h4><p>The trapezius muscle is a large, triangular, paired muscle located on the posterior aspect of the neck and thorax. When viewed together, this pair forms a diamond or trapezoid shape, hence its name. The trapezius has many attachment points, extending from the skull and vertebral column to the shoulder girdle.</p><p>The trapezius belongs to the superficial layer of the extrinsic muscles of the back, along with latissimus dorsi, rhomboid major and minor, and levator scapulae muscles. The trapezius is largely involved in movements of the shoulder girdle, and is therefore functionally considered as a muscle of the upper limb rather than of the back.</p>`,
      },
      {
        name: "Trapezius front left",
        shape: "poly",
        coords: [
          182, 104, 180, 111, 180, 121, 180, 129, 187, 132, 194, 132, 203, 132,
          211, 132, 215, 131, 198, 120, 191, 113,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
        tooltip: "left",
        description: `<h4>Trapezius</h4><p>The trapezius muscle is a large, triangular, paired muscle located on the posterior aspect of the neck and thorax. When viewed together, this pair forms a diamond or trapezoid shape, hence its name. The trapezius has many attachment points, extending from the skull and vertebral column to the shoulder girdle.</p><p>The trapezius belongs to the superficial layer of the extrinsic muscles of the back, along with latissimus dorsi, rhomboid major and minor, and levator scapulae muscles. The trapezius is largely involved in movements of the shoulder girdle, and is therefore functionally considered as a muscle of the upper limb rather than of the back.</p>`,
      },
    ],
  };
  return MAP;
}
