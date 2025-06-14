/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 507.0, "minX": 0.0, "maxY": 22047.0, "series": [{"data": [[0.0, 507.0], [0.1, 522.0], [0.2, 540.0], [0.3, 550.0], [0.4, 562.0], [0.5, 575.0], [0.6, 587.0], [0.7, 590.0], [0.8, 597.0], [0.9, 605.0], [1.0, 617.0], [1.1, 625.0], [1.2, 631.0], [1.3, 644.0], [1.4, 654.0], [1.5, 666.0], [1.6, 690.0], [1.7, 696.0], [1.8, 705.0], [1.9, 718.0], [2.0, 721.0], [2.1, 735.0], [2.2, 761.0], [2.3, 779.0], [2.4, 813.0], [2.5, 838.0], [2.6, 866.0], [2.7, 897.0], [2.8, 905.0], [2.9, 908.0], [3.0, 933.0], [3.1, 958.0], [3.2, 975.0], [3.3, 1045.0], [3.4, 1052.0], [3.5, 1182.0], [3.6, 1212.0], [3.7, 1237.0], [3.8, 1255.0], [3.9, 1273.0], [4.0, 1307.0], [4.1, 1314.0], [4.2, 1341.0], [4.3, 1357.0], [4.4, 1426.0], [4.5, 1483.0], [4.6, 1506.0], [4.7, 1530.0], [4.8, 1564.0], [4.9, 1574.0], [5.0, 1594.0], [5.1, 1614.0], [5.2, 1626.0], [5.3, 1673.0], [5.4, 1689.0], [5.5, 1723.0], [5.6, 1759.0], [5.7, 1765.0], [5.8, 1810.0], [5.9, 1829.0], [6.0, 1843.0], [6.1, 1852.0], [6.2, 1857.0], [6.3, 1878.0], [6.4, 1891.0], [6.5, 1918.0], [6.6, 1933.0], [6.7, 1944.0], [6.8, 1958.0], [6.9, 1968.0], [7.0, 1995.0], [7.1, 2008.0], [7.2, 2026.0], [7.3, 2049.0], [7.4, 2079.0], [7.5, 2082.0], [7.6, 2103.0], [7.7, 2112.0], [7.8, 2150.0], [7.9, 2165.0], [8.0, 2177.0], [8.1, 2193.0], [8.2, 2198.0], [8.3, 2213.0], [8.4, 2223.0], [8.5, 2227.0], [8.6, 2243.0], [8.7, 2246.0], [8.8, 2250.0], [8.9, 2271.0], [9.0, 2282.0], [9.1, 2299.0], [9.2, 2307.0], [9.3, 2312.0], [9.4, 2314.0], [9.5, 2319.0], [9.6, 2341.0], [9.7, 2350.0], [9.8, 2381.0], [9.9, 2387.0], [10.0, 2389.0], [10.1, 2391.0], [10.2, 2419.0], [10.3, 2428.0], [10.4, 2432.0], [10.5, 2445.0], [10.6, 2447.0], [10.7, 2453.0], [10.8, 2476.0], [10.9, 2482.0], [11.0, 2493.0], [11.1, 2498.0], [11.2, 2501.0], [11.3, 2511.0], [11.4, 2521.0], [11.5, 2524.0], [11.6, 2529.0], [11.7, 2534.0], [11.8, 2538.0], [11.9, 2546.0], [12.0, 2552.0], [12.1, 2554.0], [12.2, 2561.0], [12.3, 2573.0], [12.4, 2579.0], [12.5, 2582.0], [12.6, 2584.0], [12.7, 2588.0], [12.8, 2595.0], [12.9, 2600.0], [13.0, 2603.0], [13.1, 2604.0], [13.2, 2608.0], [13.3, 2615.0], [13.4, 2617.0], [13.5, 2618.0], [13.6, 2625.0], [13.7, 2628.0], [13.8, 2630.0], [13.9, 2634.0], [14.0, 2637.0], [14.1, 2638.0], [14.2, 2640.0], [14.3, 2644.0], [14.4, 2644.0], [14.5, 2647.0], [14.6, 2650.0], [14.7, 2652.0], [14.8, 2657.0], [14.9, 2658.0], [15.0, 2661.0], [15.1, 2664.0], [15.2, 2667.0], [15.3, 2669.0], [15.4, 2673.0], [15.5, 2678.0], [15.6, 2681.0], [15.7, 2684.0], [15.8, 2687.0], [15.9, 2689.0], [16.0, 2693.0], [16.1, 2695.0], [16.2, 2699.0], [16.3, 2707.0], [16.4, 2709.0], [16.5, 2719.0], [16.6, 2719.0], [16.7, 2721.0], [16.8, 2731.0], [16.9, 2731.0], [17.0, 2736.0], [17.1, 2738.0], [17.2, 2740.0], [17.3, 2745.0], [17.4, 2748.0], [17.5, 2752.0], [17.6, 2754.0], [17.7, 2756.0], [17.8, 2757.0], [17.9, 2759.0], [18.0, 2761.0], [18.1, 2761.0], [18.2, 2762.0], [18.3, 2765.0], [18.4, 2769.0], [18.5, 2773.0], [18.6, 2775.0], [18.7, 2776.0], [18.8, 2782.0], [18.9, 2783.0], [19.0, 2786.0], [19.1, 2789.0], [19.2, 2791.0], [19.3, 2793.0], [19.4, 2794.0], [19.5, 2796.0], [19.6, 2798.0], [19.7, 2798.0], [19.8, 2800.0], [19.9, 2800.0], [20.0, 2804.0], [20.1, 2804.0], [20.2, 2805.0], [20.3, 2806.0], [20.4, 2808.0], [20.5, 2809.0], [20.6, 2809.0], [20.7, 2811.0], [20.8, 2811.0], [20.9, 2813.0], [21.0, 2813.0], [21.1, 2814.0], [21.2, 2814.0], [21.3, 2816.0], [21.4, 2817.0], [21.5, 2819.0], [21.6, 2820.0], [21.7, 2820.0], [21.8, 2823.0], [21.9, 2825.0], [22.0, 2828.0], [22.1, 2829.0], [22.2, 2830.0], [22.3, 2833.0], [22.4, 2834.0], [22.5, 2836.0], [22.6, 2840.0], [22.7, 2842.0], [22.8, 2845.0], [22.9, 2848.0], [23.0, 2851.0], [23.1, 2852.0], [23.2, 2853.0], [23.3, 2859.0], [23.4, 2861.0], [23.5, 2862.0], [23.6, 2862.0], [23.7, 2864.0], [23.8, 2866.0], [23.9, 2867.0], [24.0, 2868.0], [24.1, 2870.0], [24.2, 2872.0], [24.3, 2875.0], [24.4, 2876.0], [24.5, 2877.0], [24.6, 2878.0], [24.7, 2883.0], [24.8, 2887.0], [24.9, 2889.0], [25.0, 2890.0], [25.1, 2890.0], [25.2, 2892.0], [25.3, 2893.0], [25.4, 2894.0], [25.5, 2896.0], [25.6, 2897.0], [25.7, 2897.0], [25.8, 2899.0], [25.9, 2899.0], [26.0, 2901.0], [26.1, 2902.0], [26.2, 2903.0], [26.3, 2906.0], [26.4, 2907.0], [26.5, 2910.0], [26.6, 2911.0], [26.7, 2912.0], [26.8, 2912.0], [26.9, 2913.0], [27.0, 2914.0], [27.1, 2919.0], [27.2, 2920.0], [27.3, 2923.0], [27.4, 2928.0], [27.5, 2928.0], [27.6, 2930.0], [27.7, 2931.0], [27.8, 2933.0], [27.9, 2934.0], [28.0, 2935.0], [28.1, 2936.0], [28.2, 2937.0], [28.3, 2940.0], [28.4, 2941.0], [28.5, 2941.0], [28.6, 2942.0], [28.7, 2943.0], [28.8, 2943.0], [28.9, 2944.0], [29.0, 2945.0], [29.1, 2946.0], [29.2, 2947.0], [29.3, 2948.0], [29.4, 2951.0], [29.5, 2951.0], [29.6, 2952.0], [29.7, 2953.0], [29.8, 2954.0], [29.9, 2955.0], [30.0, 2957.0], [30.1, 2958.0], [30.2, 2960.0], [30.3, 2960.0], [30.4, 2962.0], [30.5, 2964.0], [30.6, 2965.0], [30.7, 2965.0], [30.8, 2967.0], [30.9, 2968.0], [31.0, 2970.0], [31.1, 2972.0], [31.2, 2972.0], [31.3, 2973.0], [31.4, 2974.0], [31.5, 2976.0], [31.6, 2977.0], [31.7, 2977.0], [31.8, 2978.0], [31.9, 2979.0], [32.0, 2980.0], [32.1, 2981.0], [32.2, 2982.0], [32.3, 2983.0], [32.4, 2984.0], [32.5, 2984.0], [32.6, 2984.0], [32.7, 2985.0], [32.8, 2985.0], [32.9, 2986.0], [33.0, 2987.0], [33.1, 2988.0], [33.2, 2989.0], [33.3, 2991.0], [33.4, 2991.0], [33.5, 2991.0], [33.6, 2994.0], [33.7, 2994.0], [33.8, 2996.0], [33.9, 2996.0], [34.0, 2997.0], [34.1, 2997.0], [34.2, 2998.0], [34.3, 2998.0], [34.4, 2998.0], [34.5, 2998.0], [34.6, 3000.0], [34.7, 3002.0], [34.8, 3004.0], [34.9, 3005.0], [35.0, 3006.0], [35.1, 3007.0], [35.2, 3007.0], [35.3, 3008.0], [35.4, 3009.0], [35.5, 3009.0], [35.6, 3010.0], [35.7, 3011.0], [35.8, 3012.0], [35.9, 3012.0], [36.0, 3013.0], [36.1, 3014.0], [36.2, 3015.0], [36.3, 3016.0], [36.4, 3017.0], [36.5, 3017.0], [36.6, 3018.0], [36.7, 3018.0], [36.8, 3019.0], [36.9, 3019.0], [37.0, 3021.0], [37.1, 3022.0], [37.2, 3023.0], [37.3, 3023.0], [37.4, 3024.0], [37.5, 3025.0], [37.6, 3026.0], [37.7, 3026.0], [37.8, 3027.0], [37.9, 3027.0], [38.0, 3028.0], [38.1, 3029.0], [38.2, 3030.0], [38.3, 3031.0], [38.4, 3031.0], [38.5, 3031.0], [38.6, 3032.0], [38.7, 3033.0], [38.8, 3034.0], [38.9, 3034.0], [39.0, 3034.0], [39.1, 3035.0], [39.2, 3036.0], [39.3, 3036.0], [39.4, 3037.0], [39.5, 3037.0], [39.6, 3039.0], [39.7, 3039.0], [39.8, 3039.0], [39.9, 3040.0], [40.0, 3040.0], [40.1, 3040.0], [40.2, 3041.0], [40.3, 3041.0], [40.4, 3041.0], [40.5, 3042.0], [40.6, 3043.0], [40.7, 3043.0], [40.8, 3044.0], [40.9, 3044.0], [41.0, 3045.0], [41.1, 3046.0], [41.2, 3046.0], [41.3, 3047.0], [41.4, 3047.0], [41.5, 3047.0], [41.6, 3047.0], [41.7, 3048.0], [41.8, 3048.0], [41.9, 3048.0], [42.0, 3049.0], [42.1, 3049.0], [42.2, 3049.0], [42.3, 3050.0], [42.4, 3051.0], [42.5, 3051.0], [42.6, 3051.0], [42.7, 3052.0], [42.8, 3052.0], [42.9, 3053.0], [43.0, 3053.0], [43.1, 3054.0], [43.2, 3054.0], [43.3, 3054.0], [43.4, 3054.0], [43.5, 3055.0], [43.6, 3056.0], [43.7, 3056.0], [43.8, 3057.0], [43.9, 3058.0], [44.0, 3058.0], [44.1, 3058.0], [44.2, 3059.0], [44.3, 3059.0], [44.4, 3060.0], [44.5, 3060.0], [44.6, 3060.0], [44.7, 3060.0], [44.8, 3061.0], [44.9, 3061.0], [45.0, 3062.0], [45.1, 3062.0], [45.2, 3062.0], [45.3, 3063.0], [45.4, 3063.0], [45.5, 3063.0], [45.6, 3064.0], [45.7, 3064.0], [45.8, 3065.0], [45.9, 3065.0], [46.0, 3066.0], [46.1, 3066.0], [46.2, 3066.0], [46.3, 3066.0], [46.4, 3067.0], [46.5, 3067.0], [46.6, 3067.0], [46.7, 3068.0], [46.8, 3068.0], [46.9, 3068.0], [47.0, 3069.0], [47.1, 3069.0], [47.2, 3069.0], [47.3, 3070.0], [47.4, 3070.0], [47.5, 3071.0], [47.6, 3071.0], [47.7, 3071.0], [47.8, 3071.0], [47.9, 3071.0], [48.0, 3072.0], [48.1, 3072.0], [48.2, 3072.0], [48.3, 3072.0], [48.4, 3072.0], [48.5, 3073.0], [48.6, 3073.0], [48.7, 3073.0], [48.8, 3073.0], [48.9, 3074.0], [49.0, 3074.0], [49.1, 3075.0], [49.2, 3075.0], [49.3, 3076.0], [49.4, 3076.0], [49.5, 3077.0], [49.6, 3077.0], [49.7, 3077.0], [49.8, 3077.0], [49.9, 3077.0], [50.0, 3078.0], [50.1, 3078.0], [50.2, 3079.0], [50.3, 3079.0], [50.4, 3079.0], [50.5, 3079.0], [50.6, 3079.0], [50.7, 3080.0], [50.8, 3080.0], [50.9, 3080.0], [51.0, 3080.0], [51.1, 3081.0], [51.2, 3081.0], [51.3, 3082.0], [51.4, 3083.0], [51.5, 3083.0], [51.6, 3083.0], [51.7, 3083.0], [51.8, 3083.0], [51.9, 3083.0], [52.0, 3083.0], [52.1, 3084.0], [52.2, 3084.0], [52.3, 3084.0], [52.4, 3084.0], [52.5, 3085.0], [52.6, 3085.0], [52.7, 3085.0], [52.8, 3086.0], [52.9, 3086.0], [53.0, 3086.0], [53.1, 3086.0], [53.2, 3086.0], [53.3, 3087.0], [53.4, 3087.0], [53.5, 3088.0], [53.6, 3088.0], [53.7, 3089.0], [53.8, 3089.0], [53.9, 3089.0], [54.0, 3089.0], [54.1, 3090.0], [54.2, 3090.0], [54.3, 3091.0], [54.4, 3091.0], [54.5, 3091.0], [54.6, 3092.0], [54.7, 3092.0], [54.8, 3092.0], [54.9, 3093.0], [55.0, 3093.0], [55.1, 3093.0], [55.2, 3093.0], [55.3, 3095.0], [55.4, 3095.0], [55.5, 3095.0], [55.6, 3095.0], [55.7, 3095.0], [55.8, 3096.0], [55.9, 3096.0], [56.0, 3097.0], [56.1, 3098.0], [56.2, 3098.0], [56.3, 3099.0], [56.4, 3099.0], [56.5, 3099.0], [56.6, 3100.0], [56.7, 3100.0], [56.8, 3100.0], [56.9, 3100.0], [57.0, 3101.0], [57.1, 3101.0], [57.2, 3101.0], [57.3, 3102.0], [57.4, 3102.0], [57.5, 3102.0], [57.6, 3102.0], [57.7, 3103.0], [57.8, 3104.0], [57.9, 3104.0], [58.0, 3105.0], [58.1, 3106.0], [58.2, 3106.0], [58.3, 3106.0], [58.4, 3106.0], [58.5, 3107.0], [58.6, 3107.0], [58.7, 3107.0], [58.8, 3107.0], [58.9, 3108.0], [59.0, 3108.0], [59.1, 3108.0], [59.2, 3109.0], [59.3, 3109.0], [59.4, 3110.0], [59.5, 3112.0], [59.6, 3112.0], [59.7, 3112.0], [59.8, 3113.0], [59.9, 3113.0], [60.0, 3113.0], [60.1, 3114.0], [60.2, 3114.0], [60.3, 3115.0], [60.4, 3115.0], [60.5, 3115.0], [60.6, 3116.0], [60.7, 3116.0], [60.8, 3116.0], [60.9, 3116.0], [61.0, 3117.0], [61.1, 3118.0], [61.2, 3118.0], [61.3, 3118.0], [61.4, 3118.0], [61.5, 3119.0], [61.6, 3119.0], [61.7, 3120.0], [61.8, 3120.0], [61.9, 3121.0], [62.0, 3121.0], [62.1, 3122.0], [62.2, 3122.0], [62.3, 3123.0], [62.4, 3124.0], [62.5, 3124.0], [62.6, 3124.0], [62.7, 3125.0], [62.8, 3126.0], [62.9, 3126.0], [63.0, 3127.0], [63.1, 3127.0], [63.2, 3128.0], [63.3, 3129.0], [63.4, 3129.0], [63.5, 3130.0], [63.6, 3130.0], [63.7, 3130.0], [63.8, 3131.0], [63.9, 3131.0], [64.0, 3132.0], [64.1, 3132.0], [64.2, 3132.0], [64.3, 3133.0], [64.4, 3133.0], [64.5, 3135.0], [64.6, 3135.0], [64.7, 3135.0], [64.8, 3137.0], [64.9, 3137.0], [65.0, 3138.0], [65.1, 3138.0], [65.2, 3139.0], [65.3, 3139.0], [65.4, 3139.0], [65.5, 3140.0], [65.6, 3140.0], [65.7, 3140.0], [65.8, 3140.0], [65.9, 3141.0], [66.0, 3141.0], [66.1, 3141.0], [66.2, 3142.0], [66.3, 3142.0], [66.4, 3143.0], [66.5, 3144.0], [66.6, 3144.0], [66.7, 3145.0], [66.8, 3145.0], [66.9, 3145.0], [67.0, 3146.0], [67.1, 3146.0], [67.2, 3146.0], [67.3, 3147.0], [67.4, 3147.0], [67.5, 3148.0], [67.6, 3148.0], [67.7, 3148.0], [67.8, 3149.0], [67.9, 3149.0], [68.0, 3149.0], [68.1, 3149.0], [68.2, 3150.0], [68.3, 3150.0], [68.4, 3150.0], [68.5, 3151.0], [68.6, 3151.0], [68.7, 3152.0], [68.8, 3153.0], [68.9, 3153.0], [69.0, 3153.0], [69.1, 3154.0], [69.2, 3154.0], [69.3, 3154.0], [69.4, 3155.0], [69.5, 3155.0], [69.6, 3155.0], [69.7, 3155.0], [69.8, 3156.0], [69.9, 3156.0], [70.0, 3156.0], [70.1, 3157.0], [70.2, 3158.0], [70.3, 3158.0], [70.4, 3159.0], [70.5, 3159.0], [70.6, 3160.0], [70.7, 3160.0], [70.8, 3161.0], [70.9, 3161.0], [71.0, 3162.0], [71.1, 3162.0], [71.2, 3163.0], [71.3, 3164.0], [71.4, 3165.0], [71.5, 3165.0], [71.6, 3166.0], [71.7, 3166.0], [71.8, 3167.0], [71.9, 3167.0], [72.0, 3168.0], [72.1, 3168.0], [72.2, 3168.0], [72.3, 3169.0], [72.4, 3169.0], [72.5, 3170.0], [72.6, 3170.0], [72.7, 3171.0], [72.8, 3171.0], [72.9, 3172.0], [73.0, 3173.0], [73.1, 3174.0], [73.2, 3174.0], [73.3, 3174.0], [73.4, 3174.0], [73.5, 3175.0], [73.6, 3175.0], [73.7, 3175.0], [73.8, 3176.0], [73.9, 3177.0], [74.0, 3178.0], [74.1, 3179.0], [74.2, 3179.0], [74.3, 3179.0], [74.4, 3179.0], [74.5, 3180.0], [74.6, 3182.0], [74.7, 3182.0], [74.8, 3184.0], [74.9, 3184.0], [75.0, 3186.0], [75.1, 3186.0], [75.2, 3186.0], [75.3, 3186.0], [75.4, 3187.0], [75.5, 3187.0], [75.6, 3188.0], [75.7, 3188.0], [75.8, 3189.0], [75.9, 3189.0], [76.0, 3190.0], [76.1, 3191.0], [76.2, 3191.0], [76.3, 3192.0], [76.4, 3192.0], [76.5, 3193.0], [76.6, 3193.0], [76.7, 3194.0], [76.8, 3194.0], [76.9, 3194.0], [77.0, 3196.0], [77.1, 3197.0], [77.2, 3197.0], [77.3, 3199.0], [77.4, 3199.0], [77.5, 3199.0], [77.6, 3200.0], [77.7, 3200.0], [77.8, 3201.0], [77.9, 3203.0], [78.0, 3204.0], [78.1, 3204.0], [78.2, 3205.0], [78.3, 3206.0], [78.4, 3207.0], [78.5, 3209.0], [78.6, 3209.0], [78.7, 3209.0], [78.8, 3210.0], [78.9, 3210.0], [79.0, 3211.0], [79.1, 3211.0], [79.2, 3213.0], [79.3, 3215.0], [79.4, 3216.0], [79.5, 3218.0], [79.6, 3218.0], [79.7, 3219.0], [79.8, 3221.0], [79.9, 3223.0], [80.0, 3223.0], [80.1, 3226.0], [80.2, 3228.0], [80.3, 3228.0], [80.4, 3230.0], [80.5, 3231.0], [80.6, 3231.0], [80.7, 3232.0], [80.8, 3235.0], [80.9, 3237.0], [81.0, 3237.0], [81.1, 3238.0], [81.2, 3240.0], [81.3, 3241.0], [81.4, 3242.0], [81.5, 3244.0], [81.6, 3244.0], [81.7, 3245.0], [81.8, 3246.0], [81.9, 3247.0], [82.0, 3248.0], [82.1, 3248.0], [82.2, 3249.0], [82.3, 3250.0], [82.4, 3251.0], [82.5, 3252.0], [82.6, 3254.0], [82.7, 3256.0], [82.8, 3258.0], [82.9, 3259.0], [83.0, 3261.0], [83.1, 3263.0], [83.2, 3264.0], [83.3, 3267.0], [83.4, 3268.0], [83.5, 3268.0], [83.6, 3272.0], [83.7, 3273.0], [83.8, 3275.0], [83.9, 3276.0], [84.0, 3277.0], [84.1, 3278.0], [84.2, 3279.0], [84.3, 3281.0], [84.4, 3283.0], [84.5, 3284.0], [84.6, 3286.0], [84.7, 3287.0], [84.8, 3288.0], [84.9, 3288.0], [85.0, 3289.0], [85.1, 3292.0], [85.2, 3293.0], [85.3, 3296.0], [85.4, 3298.0], [85.5, 3298.0], [85.6, 3301.0], [85.7, 3305.0], [85.8, 3307.0], [85.9, 3307.0], [86.0, 3307.0], [86.1, 3308.0], [86.2, 3311.0], [86.3, 3314.0], [86.4, 3314.0], [86.5, 3315.0], [86.6, 3318.0], [86.7, 3319.0], [86.8, 3322.0], [86.9, 3323.0], [87.0, 3324.0], [87.1, 3325.0], [87.2, 3327.0], [87.3, 3328.0], [87.4, 3329.0], [87.5, 3330.0], [87.6, 3332.0], [87.7, 3333.0], [87.8, 3337.0], [87.9, 3341.0], [88.0, 3343.0], [88.1, 3345.0], [88.2, 3346.0], [88.3, 3350.0], [88.4, 3351.0], [88.5, 3351.0], [88.6, 3354.0], [88.7, 3357.0], [88.8, 3358.0], [88.9, 3359.0], [89.0, 3360.0], [89.1, 3365.0], [89.2, 3368.0], [89.3, 3372.0], [89.4, 3373.0], [89.5, 3376.0], [89.6, 3380.0], [89.7, 3381.0], [89.8, 3383.0], [89.9, 3384.0], [90.0, 3386.0], [90.1, 3388.0], [90.2, 3389.0], [90.3, 3391.0], [90.4, 3392.0], [90.5, 3397.0], [90.6, 3400.0], [90.7, 3403.0], [90.8, 3406.0], [90.9, 3406.0], [91.0, 3411.0], [91.1, 3416.0], [91.2, 3418.0], [91.3, 3424.0], [91.4, 3430.0], [91.5, 3433.0], [91.6, 3436.0], [91.7, 3437.0], [91.8, 3446.0], [91.9, 3449.0], [92.0, 3451.0], [92.1, 3461.0], [92.2, 3466.0], [92.3, 3468.0], [92.4, 3473.0], [92.5, 3479.0], [92.6, 3481.0], [92.7, 3500.0], [92.8, 3508.0], [92.9, 3509.0], [93.0, 3511.0], [93.1, 3517.0], [93.2, 3531.0], [93.3, 3533.0], [93.4, 3537.0], [93.5, 3538.0], [93.6, 3541.0], [93.7, 3545.0], [93.8, 3548.0], [93.9, 3552.0], [94.0, 3556.0], [94.1, 3573.0], [94.2, 3574.0], [94.3, 3577.0], [94.4, 3582.0], [94.5, 3585.0], [94.6, 3591.0], [94.7, 3593.0], [94.8, 3602.0], [94.9, 3603.0], [95.0, 3609.0], [95.1, 3613.0], [95.2, 3622.0], [95.3, 3630.0], [95.4, 3637.0], [95.5, 3657.0], [95.6, 3666.0], [95.7, 3668.0], [95.8, 3689.0], [95.9, 3704.0], [96.0, 3717.0], [96.1, 3724.0], [96.2, 3727.0], [96.3, 3743.0], [96.4, 3747.0], [96.5, 3757.0], [96.6, 3766.0], [96.7, 3772.0], [96.8, 3793.0], [96.9, 3805.0], [97.0, 3818.0], [97.1, 3823.0], [97.2, 3833.0], [97.3, 3850.0], [97.4, 3860.0], [97.5, 3886.0], [97.6, 3897.0], [97.7, 3908.0], [97.8, 3916.0], [97.9, 3925.0], [98.0, 3931.0], [98.1, 4001.0], [98.2, 4036.0], [98.3, 4059.0], [98.4, 4087.0], [98.5, 4090.0], [98.6, 4154.0], [98.7, 4204.0], [98.8, 4273.0], [98.9, 4375.0], [99.0, 4465.0], [99.1, 4587.0], [99.2, 4753.0], [99.3, 5472.0], [99.4, 11382.0], [99.5, 12495.0], [99.6, 15443.0], [99.7, 17038.0], [99.8, 18791.0], [99.9, 19529.0], [100.0, 22047.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 528.0, "series": [{"data": [[600.0, 21.0], [700.0, 15.0], [800.0, 9.0], [900.0, 14.0], [1000.0, 4.0], [1100.0, 2.0], [1200.0, 10.0], [1300.0, 9.0], [1400.0, 5.0], [1500.0, 11.0], [1600.0, 10.0], [1700.0, 8.0], [1800.0, 16.0], [1900.0, 15.0], [2000.0, 13.0], [2100.0, 15.0], [2200.0, 23.0], [2300.0, 23.0], [2400.0, 25.0], [2500.0, 41.0], [2600.0, 80.0], [2700.0, 86.0], [2800.0, 147.0], [2900.0, 208.0], [3000.0, 528.0], [3100.0, 504.0], [3200.0, 191.0], [3300.0, 121.0], [3400.0, 50.0], [3500.0, 50.0], [3600.0, 26.0], [3700.0, 25.0], [3800.0, 18.0], [3900.0, 11.0], [4000.0, 10.0], [4300.0, 2.0], [4100.0, 3.0], [4200.0, 5.0], [4500.0, 2.0], [4600.0, 1.0], [4400.0, 3.0], [4700.0, 2.0], [5000.0, 1.0], [5400.0, 1.0], [9900.0, 1.0], [11300.0, 1.0], [12400.0, 1.0], [12300.0, 1.0], [14300.0, 1.0], [15100.0, 1.0], [15400.0, 1.0], [16400.0, 1.0], [17000.0, 1.0], [17600.0, 1.0], [17900.0, 1.0], [19000.0, 1.0], [18700.0, 1.0], [19900.0, 1.0], [19500.0, 1.0], [22000.0, 1.0], [500.0, 20.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 109.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2291.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 109.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2291.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 33.63230240549831, "minX": 1.74989088E12, "maxY": 40.0, "series": [{"data": [[1.74989088E12, 33.63230240549831], [1.74989106E12, 34.40675241157554], [1.74989094E12, 40.0], [1.749891E12, 40.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74989106E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 540.0, "minX": 1.0, "maxY": 3209.5366814377126, "series": [{"data": [[32.0, 2150.6], [33.0, 2586.8], [2.0, 652.0], [34.0, 2518.2500000000005], [35.0, 2653.923076923077], [36.0, 2899.9736842105262], [37.0, 3027.555555555555], [38.0, 2955.7391304347834], [39.0, 2974.846153846154], [40.0, 3209.5366814377126], [3.0, 540.0], [4.0, 617.4], [5.0, 594.0], [6.0, 597.5384615384615], [7.0, 657.0], [8.0, 856.0], [9.0, 951.0], [10.0, 995.0], [11.0, 867.25], [12.0, 941.6666666666666], [13.0, 1430.142857142857], [14.0, 1183.1666666666667], [15.0, 1122.1666666666667], [16.0, 1233.1666666666665], [1.0, 2049.0], [17.0, 1648.2857142857144], [18.0, 1597.2], [19.0, 1376.8333333333333], [20.0, 1397.2], [21.0, 1462.5], [22.0, 1768.0], [23.0, 1638.3333333333333], [24.0, 1860.888888888889], [25.0, 1996.6666666666667], [26.0, 2041.4444444444443], [27.0, 2219.3333333333335], [28.0, 1809.75], [29.0, 2347.6363636363644], [30.0, 2119.1428571428573], [31.0, 2599.214285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[37.77833333333327, 3033.1887499999943]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1215.45, "minX": 1.74989088E12, "maxY": 6898.016666666666, "series": [{"data": [[1.74989088E12, 2690.9166666666665], [1.74989106E12, 5752.233333333334], [1.74989094E12, 6852.433333333333], [1.749891E12, 6898.016666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74989088E12, 1215.45], [1.74989106E12, 2598.0333333333333], [1.74989094E12, 3094.516666666667], [1.749891E12, 3116.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74989106E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2366.333333333332, "minX": 1.74989088E12, "maxY": 3261.4736842105276, "series": [{"data": [[1.74989088E12, 2366.333333333332], [1.74989106E12, 2844.649517684888], [1.74989094E12, 3261.4736842105276], [1.749891E12, 3223.7613941018776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74989106E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2366.278350515465, "minX": 1.74989088E12, "maxY": 3261.4439946018897, "series": [{"data": [[1.74989088E12, 2366.278350515465], [1.74989106E12, 2844.6237942122193], [1.74989094E12, 3261.4439946018897], [1.749891E12, 3223.749329758715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74989106E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 255.90148448043183, "minX": 1.74989088E12, "maxY": 264.8453608247424, "series": [{"data": [[1.74989088E12, 264.8453608247424], [1.74989106E12, 257.290996784566], [1.74989094E12, 255.90148448043183], [1.749891E12, 259.4115281501341]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74989106E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 507.0, "minX": 1.74989088E12, "maxY": 22047.0, "series": [{"data": [[1.74989088E12, 16408.0], [1.74989106E12, 17917.0], [1.74989094E12, 22047.0], [1.749891E12, 19529.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74989088E12, 507.0], [1.74989106E12, 522.0], [1.74989094E12, 1765.0], [1.749891E12, 1942.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74989088E12, 3048.4], [1.74989106E12, 3218.0000000000005], [1.74989094E12, 3503.2000000000003], [1.749891E12, 3514.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74989088E12, 3940.7199999999984], [1.74989106E12, 12457.279999999997], [1.74989094E12, 4769.8200000000015], [1.749891E12, 4149.479999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74989088E12, 2719.0], [1.74989106E12, 2897.0], [1.74989094E12, 3144.0], [1.749891E12, 3108.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74989088E12, 3170.3999999999996], [1.74989106E12, 3360.4], [1.74989094E12, 3613.0], [1.749891E12, 3769.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74989106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 578.0, "minX": 1.0, "maxY": 4049.0, "series": [{"data": [[8.0, 3344.5], [2.0, 726.5], [9.0, 3638.0], [10.0, 3213.0], [11.0, 3110.5], [3.0, 2011.5], [12.0, 3074.0], [13.0, 3071.0], [14.0, 3076.0], [15.0, 3050.0], [1.0, 3304.5], [16.0, 3123.0], [18.0, 3045.0], [20.0, 3199.5], [6.0, 578.0], [25.0, 3481.0], [29.0, 4049.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 578.0, "minX": 1.0, "maxY": 4049.0, "series": [{"data": [[8.0, 3344.5], [2.0, 726.5], [9.0, 3638.0], [10.0, 3213.0], [11.0, 3110.5], [3.0, 2011.5], [12.0, 3074.0], [13.0, 3071.0], [14.0, 3076.0], [15.0, 3049.0], [1.0, 3304.5], [16.0, 3123.0], [18.0, 3045.0], [20.0, 3199.5], [6.0, 578.0], [25.0, 3481.0], [29.0, 4049.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.516666666666667, "minX": 1.74989088E12, "maxY": 12.433333333333334, "series": [{"data": [[1.74989088E12, 5.516666666666667], [1.74989106E12, 9.7], [1.74989094E12, 12.35], [1.749891E12, 12.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74989106E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.85, "minX": 1.74989088E12, "maxY": 12.433333333333334, "series": [{"data": [[1.74989088E12, 4.85], [1.74989106E12, 10.366666666666667], [1.74989094E12, 12.35], [1.749891E12, 12.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74989106E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.85, "minX": 1.74989088E12, "maxY": 12.433333333333334, "series": [{"data": [[1.74989088E12, 4.85], [1.74989106E12, 10.366666666666667], [1.74989094E12, 12.35], [1.749891E12, 12.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74989106E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.85, "minX": 1.74989088E12, "maxY": 12.433333333333334, "series": [{"data": [[1.74989088E12, 4.85], [1.74989106E12, 10.366666666666667], [1.74989094E12, 12.35], [1.749891E12, 12.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74989106E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

