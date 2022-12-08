// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "" },
        { function: "__c", vtp_value: 0 },
        { vtp_signal: 0, function: "__c", vtp_value: 0 },
      ],
      tags: [
        {
          function: "__gct",
          vtp_trackingId: "G-62P3FH3XKV",
          vtp_sessionDuration: 0,
          tag_id: 1,
        },
        {
          function: "__ccd_em_video",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 3,
        },
        {
          function: "__ccd_em_scroll",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 5,
        },
        {
          function: "__ccd_em_page_view",
          vtp_historyEvents: true,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 6,
        },
        {
          function: "__ccd_conversion_marking",
          vtp_conversionRules: [
            "list",
            [
              "map",
              "matchingRules",
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 7,
        },
        {
          function: "__ccd_em_site_search",
          vtp_searchQueryParams: "q,s,search,query,keyword",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 8,
        },
        {
          function: "__ccd_em_download",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 9,
        },
        {
          function: "__ccd_em_outbound_click",
          priority: 0,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 10,
        },
        {
          function: "__ccd_ga_regscope",
          vtp_settingsTable: [
            "list",
            [
              "map",
              "redactFieldGroup",
              "DEVICE_AND_GEO",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
            [
              "map",
              "redactFieldGroup",
              "GOOGLE_SIGNALS",
              "disallowAllRegions",
              true,
              "disallowedRegions",
              "",
            ],
          ],
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          tag_id: 11,
        },
        {
          function: "__set_product_settings",
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          vtp_foreignTldMacroResult: ["macro", 1],
          vtp_isChinaVipRegionMacroResult: ["macro", 2],
          tag_id: 12,
        },
        {
          function: "__ogt_google_signals",
          vtp_googleSignals: "DISABLED",
          vtp_instanceDestinationId: "G-62P3FH3XKV",
          vtp_serverMacroResult: ["macro", 3],
          tag_id: 13,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__ccd_ga_regscope",
        [46, "a"],
        [
          50,
          "k",
          [46, "m"],
          [
            22,
            [30, [28, [15, "i"]], [21, [17, [15, "i"], "length"], 2]],
            [46, [36, false]],
          ],
          [52, "n", ["l", [15, "m"]]],
          [
            53,
            [41, "o"],
            [3, "o", 0],
            [
              63,
              [7, "o"],
              [23, [15, "o"], [17, [15, "n"], "length"]],
              [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]],
              [
                46,
                [
                  53,
                  [52, "p", [16, [15, "n"], [15, "o"]]],
                  [52, "q", [17, [15, "p"], "countryCode"]],
                  [52, "r", [17, [15, "p"], "regionCode"]],
                  [52, "s", [20, [15, "q"], [15, "i"]]],
                  [52, "t", [30, [28, [15, "r"]], [20, [15, "r"], [15, "j"]]]],
                  [22, [1, [15, "s"], [15, "t"]], [46, [36, true]]],
                ],
              ],
            ],
          ],
          [36, false],
        ],
        [
          50,
          "l",
          [46, "m"],
          [52, "n", [7]],
          [22, [28, [15, "m"]], [46, [36, [15, "n"]]]],
          [52, "o", [2, [15, "m"], "split", [7, ","]]],
          [
            53,
            [41, "p"],
            [3, "p", 0],
            [
              63,
              [7, "p"],
              [23, [15, "p"], [17, [15, "o"], "length"]],
              [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
              [
                46,
                [
                  53,
                  [52, "q", [2, [16, [15, "o"], [15, "p"]], "trim", [7]]],
                  [22, [28, [15, "q"]], [46, [6]]],
                  [52, "r", [2, [15, "q"], "split", [7, "-"]]],
                  [52, "s", [16, [15, "r"], 0]],
                  [
                    52,
                    "t",
                    [39, [20, [17, [15, "r"], "length"], 2], [15, "q"], [44]],
                  ],
                  [
                    22,
                    [30, [28, [15, "s"]], [21, [17, [15, "s"], "length"], 2]],
                    [46, [6]],
                  ],
                  [
                    22,
                    [
                      1,
                      [21, [15, "t"], [44]],
                      [
                        30,
                        [23, [17, [15, "t"], "length"], 4],
                        [18, [17, [15, "t"], "length"], 6],
                      ],
                    ],
                    [46, [6]],
                  ],
                  [
                    2,
                    [15, "n"],
                    "push",
                    [7, [8, "countryCode", [15, "s"], "regionCode", [15, "t"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "n"]],
        ],
        [52, "b", ["require", "getContainerVersion"]],
        [52, "c", ["require", "internal.setRemoteConfigParameter"]],
        [52, "d", ["require", "internal.getCountryCode"]],
        [52, "e", ["require", "internal.getRegionCode"]],
        [
          22,
          [28, [17, [15, "a"], "settingsTable"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [41, "f"],
        [
          52,
          "g",
          [
            8,
            "GOOGLE_SIGNALS",
            [7, [8, "name", "allow_google_signals", "value", false]],
            "DEVICE_AND_GEO",
            [
              7,
              [8, "name", "geo_granularity", "value", true],
              [8, "name", "redact_device_info", "value", true],
            ],
          ],
        ],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["b"], "containerId"],
          ],
        ],
        [52, "i", ["d"]],
        [52, "j", ["e"]],
        [
          53,
          [41, "m"],
          [3, "m", 0],
          [
            63,
            [7, "m"],
            [23, [15, "m"], [17, [17, [15, "a"], "settingsTable"], "length"]],
            [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
            [
              46,
              [
                53,
                [52, "n", [16, [17, [15, "a"], "settingsTable"], [15, "m"]]],
                [
                  22,
                  [
                    30,
                    [17, [15, "n"], "disallowAllRegions"],
                    ["k", [17, [15, "n"], "disallowedRegions"]],
                  ],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "o",
                        [16, [15, "g"], [17, [15, "n"], "redactFieldGroup"]],
                      ],
                      [22, [28, [15, "o"]], [46, [6]]],
                      [
                        53,
                        [41, "p"],
                        [3, "p", 0],
                        [
                          63,
                          [7, "p"],
                          [23, [15, "p"], [17, [15, "o"], "length"]],
                          [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
                          [
                            46,
                            [
                              53,
                              [52, "q", [16, [15, "o"], [15, "p"]]],
                              [
                                "c",
                                [15, "h"],
                                [17, [15, "q"], "name"],
                                [17, [15, "q"], "value"],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "d"],
          "google_tld",
          [17, [15, "a"], "foreignTldMacroResult"],
        ],
        [
          "b",
          [15, "d"],
          "ga_restrict_domain",
          [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [
          52,
          "e",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "e"],
          "google_signals",
          [20, [17, [15, "a"], "serverMacroResult"], 1],
        ],
        [
          22,
          [17, [15, "d"], "enableGa4OnoRemarketing"],
          [
            46,
            [
              "b",
              [15, "e"],
              "google_ono",
              [20, [17, [15, "a"], "serverMacroResult"], 2],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_conversion_marking",
        [46, "a"],
        [
          50,
          "m",
          [46, "n"],
          [52, "o", [2, [15, "j"], "parse", [7, [15, "n"]]]],
          [
            22,
            [
              30,
              [30, [28, [15, "o"]], [28, [16, [15, "o"], "args"]]],
              [21, [17, [16, [15, "o"], "args"], "length"], 2],
            ],
            [46, [36]],
          ],
          [52, "p", [16, [16, [16, [15, "o"], "args"], 1], "contextValue"]],
          [
            22,
            [
              30,
              [
                30,
                [
                  30,
                  [28, [15, "p"]],
                  [21, [16, [15, "p"], "namespaceType"], 1],
                ],
                [21, [17, [16, [15, "p"], "keyParts"], "length"], 1],
              ],
              [21, [16, [16, [15, "p"], "keyParts"], 0], "eventName"],
            ],
            [46, [36, [44]]],
          ],
          [52, "q", [16, [16, [15, "o"], "args"], 0]],
          [36, [1, [15, "q"], [16, [15, "q"], "stringValue"]]],
        ],
        [
          22,
          [
            30,
            [28, [17, [15, "a"], "conversionRules"]],
            [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0],
          ],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.evaluateBooleanExpression"]],
        [
          52,
          "c",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "d", ["require", "internal.registerCcdCallback"]],
        [52, "e", "is_conversion"],
        [52, "f", "syn_or_mod"],
        [
          22,
          [16, [15, "c"], "enableCcdConversions"],
          [
            46,
            [
              "d",
              [17, [15, "a"], "instanceDestinationId"],
              [
                51,
                "",
                [7, "n"],
                [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]], [46, [36]]],
                [52, "o", [8, "preHit", [15, "n"]]],
                [
                  65,
                  "p",
                  [17, [15, "a"], "conversionRules"],
                  [
                    46,
                    [
                      22,
                      ["b", [17, [15, "p"], "matchingRules"], [15, "o"]],
                      [
                        46,
                        [2, [15, "n"], "setMetadata", [7, [15, "e"], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [2, [15, "a"], "gtmOnSuccess", [7]],
            [36],
          ],
        ],
        [52, "g", ["require", "internal.setProductSettingsParameter"]],
        [52, "h", ["require", "internal.getProductSettingsParameter"]],
        [52, "i", ["require", "getContainerVersion"]],
        [52, "j", ["require", "JSON"]],
        [
          52,
          "k",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["i"], "containerId"],
          ],
        ],
        [52, "l", [30, ["h", [15, "k"], "event_settings"], [8]]],
        [
          53,
          [41, "n"],
          [3, "n", 0],
          [
            63,
            [7, "n"],
            [23, [15, "n"], [17, [17, [15, "a"], "conversionRules"], "length"]],
            [33, [15, "n"], [3, "n", [0, [15, "n"], 1]]],
            [
              46,
              [
                53,
                [
                  52,
                  "o",
                  [
                    "m",
                    [
                      16,
                      [16, [17, [15, "a"], "conversionRules"], [15, "n"]],
                      "matchingRules",
                    ],
                  ],
                ],
                [22, [28, [15, "o"]], [46, [6]]],
                [41, "p"],
                [3, "p", [16, [15, "l"], [15, "o"]]],
                [
                  22,
                  [28, [15, "p"]],
                  [46, [3, "p", [8]], [43, [15, "l"], [15, "o"], [15, "p"]]],
                ],
                [43, [15, "p"], "conversion", true],
              ],
            ],
          ],
        ],
        ["g", [15, "k"], "event_settings", [15, "l"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_scroll",
        [46, "a"],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "internal.registerCcdCallback"]],
        [52, "e", ["require", "templateStorage"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_scroll"],
        [52, "h", "scroll"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          22,
          [15, "l"],
          [
            46,
            [
              "d",
              [15, "k"],
              [
                51,
                "",
                [7, "r"],
                [
                  22,
                  [
                    30,
                    [21, [2, [15, "r"], "getEventName", [7]], [15, "h"]],
                    [28, [2, [15, "r"], "getMetadata", [7, [15, "j"]]]],
                  ],
                  [46, [36]],
                ],
                [
                  22,
                  ["c", [15, "k"], [15, "g"]],
                  [46, [2, [15, "r"], "abort", [7]], [36]],
                ],
                [2, [15, "r"], "setMetadata", [7, [15, "f"], false]],
                [
                  22,
                  [28, [17, [15, "a"], "includeParams"]],
                  [
                    46,
                    [2, [15, "r"], "setHitData", [7, "percent_scrolled", [44]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [1, [15, "l"], [2, [15, "e"], "getItem", [7, [15, "i"]]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "m", ["require", "internal.addDataLayerEventListener"]],
        [52, "n", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "o", ["require", "internal.getDestinationIds"]],
        [52, "p", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "q",
          [
            "n",
            [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90],
          ],
        ],
        [22, [28, [15, "q"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "e"], "setItem", [7, [15, "i"], true]],
        [
          "m",
          "gtm.scrollDepth",
          [
            51,
            "",
            [7, "r", "s"],
            ["s"],
            [
              22,
              [28, [15, "l"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "v",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "percent_scrolled",
                        [16, [15, "r"], "gtm.scrollThreshold"],
                      ],
                      [8],
                    ],
                  ],
                  ["p", [15, "k"], [15, "h"], [15, "v"]],
                  [36],
                ],
              ],
            ],
            [
              52,
              "t",
              [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]],
            ],
            [52, "u", [8]],
            [43, [15, "u"], [15, "j"], true],
            [43, [15, "u"], [15, "f"], true],
            ["p", ["o"], [15, "h"], [15, "t"], [8, "metadata", [15, "u"]]],
          ],
          [15, "q"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_outbound_click",
        [46, "a"],
        [
          50,
          "t",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, [44]]]],
          [41, "z"],
          [3, "z", ""],
          [
            22,
            [1, [15, "y"], [17, [15, "y"], "href"]],
            [
              46,
              [
                53,
                [41, "ba"],
                [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "z",
                  [
                    39,
                    [23, [15, "ba"], 0],
                    [17, [15, "y"], "href"],
                    [
                      2,
                      [17, [15, "y"], "href"],
                      "substring",
                      [7, 0, [15, "ba"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "z"]],
        ],
        [
          50,
          "u",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, [44]]]],
          [41, "z"],
          [3, "z", [17, [15, "y"], "hostname"]],
          [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]],
          [
            22,
            [1, [15, "ba"], [16, [15, "ba"], 0]],
            [
              46,
              [
                3,
                "z",
                [
                  2,
                  [15, "z"],
                  "substring",
                  [7, [17, [16, [15, "ba"], 0], "length"]],
                ],
              ],
            ],
          ],
          [36, [15, "z"]],
        ],
        [
          50,
          "v",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, false]]],
          [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]],
          [41, "ba"],
          [3, "ba", [2, ["u", ["r", ["q"]]], "toLowerCase", [7]]],
          [41, "bb"],
          [
            3,
            "bb",
            [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]],
          ],
          [
            22,
            [
              1,
              [18, [15, "bb"], 0],
              [29, [2, [15, "ba"], "charAt", [7, 0]], "."],
            ],
            [
              46,
              [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]],
              [3, "ba", [0, ".", [15, "ba"]]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, "bb"], 0],
              [
                12,
                [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]],
                [15, "bb"],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "internal.registerCcdCallback"]],
        [52, "e", ["require", "templateStorage"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_outbound_click"],
        [52, "h", "click"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
        [
          22,
          [15, "l"],
          [
            46,
            [
              "d",
              [15, "k"],
              [
                51,
                "",
                [7, "y"],
                [
                  22,
                  [
                    30,
                    [21, [2, [15, "y"], "getEventName", [7]], [15, "h"]],
                    [28, [2, [15, "y"], "getMetadata", [7, [15, "j"]]]],
                  ],
                  [46, [36]],
                ],
                [
                  22,
                  ["c", [15, "k"], [15, "g"]],
                  [46, [2, [15, "y"], "abort", [7]], [36]],
                ],
                [2, [15, "y"], "setMetadata", [7, [15, "f"], false]],
                [
                  22,
                  [28, [17, [15, "a"], "includeParams"]],
                  [
                    46,
                    [2, [15, "y"], "setHitData", [7, "link_id", [44]]],
                    [2, [15, "y"], "setHitData", [7, "link_classes", [44]]],
                    [2, [15, "y"], "setHitData", [7, "link_url", [44]]],
                    [2, [15, "y"], "setHitData", [7, "link_domain", [44]]],
                    [2, [15, "y"], "setHitData", [7, "outbound", [44]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [1, [15, "l"], [2, [15, "e"], "getItem", [7, [15, "i"]]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "m", ["require", "internal.addDataLayerEventListener"]],
        [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "o", ["require", "internal.getDestinationIds"]],
        [52, "p", ["require", "internal.getRemoteConfigParameter"]],
        [52, "q", ["require", "getUrl"]],
        [52, "r", ["require", "parseUrl"]],
        [52, "s", ["require", "internal.sendGtagEvent"]],
        [52, "w", ["p", [15, "k"], "cross_domain_conditions"]],
        [
          52,
          "x",
          [
            "n",
            [
              8,
              "affiliateDomains",
              [15, "w"],
              "checkValidation",
              true,
              "waitForTags",
              false,
            ],
          ],
        ],
        [22, [28, [15, "x"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "e"], "setItem", [7, [15, "i"], true]],
        [
          "m",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "y", "z"],
            [52, "ba", ["r", [16, [15, "y"], "gtm.elementUrl"]]],
            [22, [28, ["v", [15, "ba"]]], [46, ["z"], [36]]],
            [
              52,
              "bb",
              [
                39,
                [30, [28, [28, [17, [15, "a"], "includeParams"]]], [15, "l"]],
                [
                  8,
                  "link_id",
                  [16, [15, "y"], "gtm.elementId"],
                  "link_classes",
                  [16, [15, "y"], "gtm.elementClasses"],
                  "link_url",
                  ["t", [15, "ba"]],
                  "link_domain",
                  ["u", [15, "ba"]],
                  "outbound",
                  true,
                ],
                [8],
              ],
            ],
            [43, [15, "bb"], "event_callback", [15, "z"]],
            [
              22,
              [15, "l"],
              [
                46,
                [
                  53,
                  [52, "bc", [8]],
                  [43, [15, "bc"], [15, "j"], true],
                  [43, [15, "bc"], [15, "f"], true],
                  [
                    "s",
                    ["o"],
                    [15, "h"],
                    [15, "bb"],
                    [8, "metadata", [15, "bc"]],
                  ],
                ],
              ],
              [46, ["s", [15, "k"], [15, "h"], [15, "bb"]]],
            ],
          ],
          [15, "x"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_video",
        [46, "a"],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "internal.registerCcdCallback"]],
        [52, "e", ["require", "templateStorage"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_video"],
        [52, "h", "video_start"],
        [52, "i", "video_progress"],
        [52, "j", "video_complete"],
        [52, "k", "isRegistered"],
        [52, "l", "em_event"],
        [52, "m", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "m"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
        [
          22,
          [15, "n"],
          [
            46,
            [
              "d",
              [15, "m"],
              [
                51,
                "",
                [7, "t"],
                [52, "u", [2, [15, "t"], "getEventName", [7]]],
                [
                  52,
                  "v",
                  [
                    30,
                    [
                      30,
                      [20, [15, "u"], [15, "h"]],
                      [20, [15, "u"], [15, "i"]],
                    ],
                    [20, [15, "u"], [15, "j"]],
                  ],
                ],
                [
                  22,
                  [
                    30,
                    [28, [15, "v"]],
                    [28, [2, [15, "t"], "getMetadata", [7, [15, "l"]]]],
                  ],
                  [46, [36]],
                ],
                [
                  22,
                  ["c", [15, "m"], [15, "g"]],
                  [46, [2, [15, "t"], "abort", [7]], [36]],
                ],
                [2, [15, "t"], "setMetadata", [7, [15, "f"], false]],
                [
                  22,
                  [28, [17, [15, "a"], "includeParams"]],
                  [
                    46,
                    [
                      2,
                      [15, "t"],
                      "setHitData",
                      [7, "video_current_time", [44]],
                    ],
                    [2, [15, "t"], "setHitData", [7, "video_duration", [44]]],
                    [2, [15, "t"], "setHitData", [7, "video_percent", [44]]],
                    [2, [15, "t"], "setHitData", [7, "video_provider", [44]]],
                    [2, [15, "t"], "setHitData", [7, "video_title", [44]]],
                    [2, [15, "t"], "setHitData", [7, "video_url", [44]]],
                    [2, [15, "t"], "setHitData", [7, "visible", [44]]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [1, [15, "n"], [2, [15, "e"], "getItem", [7, [15, "k"]]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "o", ["require", "internal.addDataLayerEventListener"]],
        [52, "p", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
        [52, "q", ["require", "internal.getDestinationIds"]],
        [52, "r", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "s",
          [
            "p",
            [
              8,
              "captureComplete",
              true,
              "captureStart",
              true,
              "progressThresholdsPercent",
              [7, 10, 25, 50, 75],
            ],
          ],
        ],
        [22, [28, [15, "s"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "e"], "setItem", [7, [15, "k"], true]],
        [
          "o",
          "gtm.video",
          [
            51,
            "",
            [7, "t", "u"],
            ["u"],
            [52, "v", [16, [15, "t"], "gtm.videoStatus"]],
            [41, "w"],
            [
              22,
              [20, [15, "v"], "start"],
              [46, [3, "w", [15, "h"]]],
              [
                46,
                [
                  22,
                  [20, [15, "v"], "progress"],
                  [46, [3, "w", [15, "i"]]],
                  [
                    46,
                    [
                      22,
                      [20, [15, "v"], "complete"],
                      [46, [3, "w", [15, "j"]]],
                      [46, [36]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "x",
              [
                39,
                [30, [28, [28, [17, [15, "a"], "includeParams"]]], [15, "n"]],
                [
                  8,
                  "video_current_time",
                  [16, [15, "t"], "gtm.videoCurrentTime"],
                  "video_duration",
                  [16, [15, "t"], "gtm.videoDuration"],
                  "video_percent",
                  [16, [15, "t"], "gtm.videoPercent"],
                  "video_provider",
                  [16, [15, "t"], "gtm.videoProvider"],
                  "video_title",
                  [16, [15, "t"], "gtm.videoTitle"],
                  "video_url",
                  [16, [15, "t"], "gtm.videoUrl"],
                  "visible",
                  [16, [15, "t"], "gtm.videoVisible"],
                ],
                [8],
              ],
            ],
            [
              22,
              [15, "n"],
              [
                46,
                [
                  53,
                  [52, "y", [8]],
                  [43, [15, "y"], [15, "l"], true],
                  [43, [15, "y"], [15, "f"], true],
                  [
                    "r",
                    ["q"],
                    [15, "w"],
                    [15, "x"],
                    [8, "metadata", [15, "y"]],
                  ],
                ],
              ],
              [46, ["r", [15, "m"], [15, "w"], [15, "x"]]],
            ],
          ],
          [15, "s"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_page_view",
        [46, "a"],
        [
          22,
          [28, [17, [15, "a"], "historyEvents"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnHistoryChange"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.sendGtagEvent"]],
        [52, "g", ["require", "internal.setRemoteConfigParameter"]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "h"], "ae_block_history"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "i", ["c", [8, "interval", 1000]]],
        [22, [28, [15, "i"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.historyChange-v2",
          [
            51,
            "",
            [7, "j", "k"],
            ["k"],
            [52, "l", [16, [15, "j"], "gtm.oldUrl"]],
            [22, [20, [16, [15, "j"], "gtm.newUrl"], [15, "l"]], [46, [36]]],
            [52, "m", [16, [15, "j"], "gtm.historyChangeSource"]],
            [
              22,
              [
                1,
                [1, [21, [15, "m"], "pushState"], [21, [15, "m"], "popstate"]],
                [21, [15, "m"], "replaceState"],
              ],
              [46, [36]],
            ],
            [
              52,
              "n",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [
                  8,
                  "page_location",
                  [16, [15, "j"], "gtm.newUrl"],
                  "page_referrer",
                  [15, "l"],
                ],
                [8],
              ],
            ],
            ["f", [15, "h"], "page_view", [15, "n"]],
            ["g", [15, "h"], "page_referrer", [15, "l"]],
          ],
          [15, "i"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_download",
        [46, "a"],
        [
          50,
          "i",
          [46, "o"],
          [
            36,
            [
              1,
              [15, "o"],
              [
                21,
                [
                  2,
                  [2, [15, "o"], "toLowerCase", [7]],
                  "match",
                  [7, [15, "h"]],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          "j",
          [46, "o"],
          [52, "p", [2, [17, [15, "o"], "pathname"], "split", [7, "."]]],
          [
            52,
            "q",
            [
              39,
              [18, [17, [15, "p"], "length"], 1],
              [16, [15, "p"], [37, [17, [15, "p"], "length"], 1]],
              "",
            ],
          ],
          [36, [16, [2, [15, "q"], "split", [7, "/"]], 0]],
        ],
        [
          50,
          "k",
          [46, "o"],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, "o"], "pathname"], "substring", [7, 0, 1]],
                "/",
              ],
              [17, [15, "o"], "pathname"],
              [0, "/", [17, [15, "o"], "pathname"]],
            ],
          ],
        ],
        [
          50,
          "l",
          [46, "o"],
          [41, "p"],
          [3, "p", ""],
          [
            22,
            [1, [15, "o"], [17, [15, "o"], "href"]],
            [
              46,
              [
                53,
                [41, "q"],
                [3, "q", [2, [17, [15, "o"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "p",
                  [
                    39,
                    [23, [15, "q"], 0],
                    [17, [15, "o"], "href"],
                    [
                      2,
                      [17, [15, "o"], "href"],
                      "substring",
                      [7, 0, [15, "q"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "p"]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "parseUrl"]],
        [52, "g", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "h",
          [
            0,
            "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|",
            "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
          ],
        ],
        [
          52,
          "m",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "m"], "ae_block_downloads"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", ["c", [8, "checkValidation", true]]],
        [22, [28, [15, "n"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "o", "p"],
            ["p"],
            [52, "q", [16, [15, "o"], "gtm.elementUrl"]],
            [52, "r", ["f", [15, "q"]]],
            [22, [28, [15, "r"]], [46, [36]]],
            [52, "s", ["j", [15, "r"]]],
            [
              22,
              ["i", [15, "s"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "t",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "o"], "gtm.elementId"],
                        "link_url",
                        ["l", [15, "r"]],
                        "link_text",
                        [16, [15, "o"], "gtm.elementText"],
                        "file_name",
                        ["k", [15, "r"]],
                        "file_extension",
                        [15, "s"],
                      ],
                      [8],
                    ],
                  ],
                  ["g", [15, "m"], "file_download", [15, "t"]],
                ],
              ],
            ],
          ],
          [15, "n"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_site_search",
        [46, "a"],
        [
          50,
          "e",
          [46, "i"],
          [52, "j", [2, [30, [15, "i"], ""], "split", [7, ","]]],
          [
            53,
            [41, "k"],
            [3, "k", 0],
            [
              63,
              [7, "k"],
              [23, [15, "k"], [17, [15, "j"], "length"]],
              [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "l",
                    ["b", [2, [16, [15, "j"], [15, "k"]], "trim", [7]]],
                  ],
                  [22, [21, [15, "l"], [44]], [46, [36, [15, "l"]]]],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          "f",
          [46, "i", "j"],
          [52, "k", [8, "search_term", [15, "i"]]],
          [52, "l", [2, [30, [15, "j"], ""], "split", [7, ","]]],
          [
            53,
            [41, "m"],
            [3, "m", 0],
            [
              63,
              [7, "m"],
              [23, [15, "m"], [17, [15, "l"], "length"]],
              [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
              [
                46,
                [
                  53,
                  [52, "n", [2, [16, [15, "l"], [15, "m"]], "trim", [7]]],
                  [52, "o", ["b", [15, "n"]]],
                  [
                    22,
                    [21, [15, "o"], [44]],
                    [46, [43, [15, "k"], [0, "q_", [15, "n"]], [15, "o"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "k"]],
        ],
        [52, "b", ["require", "getQueryParameters"]],
        [52, "c", ["require", "internal.sendGtagEvent"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          [15, "g"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [
                  39,
                  [28, [28, [17, [15, "a"], "includeParams"]]],
                  ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]],
                  [8],
                ],
              ],
              [
                "c",
                [15, "h"],
                "view_search_results",
                [15, "i"],
                [8, "deferrable", true],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
    ],
    permissions: {
      __ccd_ga_regscope: { read_container_data: {} },
      __set_product_settings: { read_container_data: {} },
      __ogt_google_signals: { read_container_data: {} },
      __ccd_conversion_marking: { read_container_data: {} },
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.scrollDepth"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "resize" },
            { targetType: "window", eventName: "scroll" },
          ],
        },
        access_template_storage: {},
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        access_template_storage: {},
      },
      __ccd_em_video: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.video"],
        },
        process_dom_events: {
          targets: [
            { targetType: "element", eventName: "onStateChange" },
            { targetType: "element", eventName: "onPlaybackRateChange" },
          ],
        },
        access_template_storage: {},
      },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.historyChange-v2"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "pushstate" },
            { targetType: "window", eventName: "popstate" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_download: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_site_search: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        read_container_data: {},
      },
    },

    security_groups: {
      google: [
        "__ccd_ga_regscope",
        "__set_product_settings",
        "__ogt_google_signals",
        "__ccd_conversion_marking",
        "__ccd_em_scroll",
        "__ccd_em_outbound_click",
        "__ccd_em_video",
        "__ccd_em_page_view",
        "__ccd_em_download",
        "__ccd_em_site_search",
      ],
    },
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ia;
        ha = ka.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = fa,
    ma = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.fl = b.prototype;
    },
    na = this || self,
    oa = function (a) {
      return a;
    };
  var pa = function (a, b) {
    this.h = a;
    this.s = b;
  };
  var qa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    ra = function () {
      this.D = {};
      this.H = !1;
      this.K = {};
    },
    sa = function (a, b) {
      var c = [],
        d;
      for (d in a.D)
        if (a.D.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  ra.prototype.get = function (a) {
    return this.D["dust." + a];
  };
  ra.prototype.set = function (a, b) {
    this.H || ((a = "dust." + a), this.K.hasOwnProperty(a) || (this.D[a] = b));
  };
  ra.prototype.has = function (a) {
    return this.D.hasOwnProperty("dust." + a);
  };
  var ta = function (a, b) {
    b = "dust." + b;
    a.H || a.K.hasOwnProperty(b) || delete a.D[b];
  };
  ra.prototype.Rb = function () {
    this.H = !0;
  };
  ra.prototype.Oe = function () {
    return this.H;
  };
  var ua = function (a) {
    this.s = new ra();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (qa(b) ? (this.h[Number(b)] = a[Number(b)]) : this.s.set(b, a[b]));
  };
  aa = ua.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof ua
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.D)
      if ("length" === a) {
        if (!qa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else qa(a) ? (this.h[Number(a)] = b) : this.s.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : qa(a)
      ? this.h[Number(a)]
      : this.s.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Qb = function () {
    for (var a = sa(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new ua(a);
  };
  var va = function (a, b) {
    qa(b) ? delete a.h[Number(b)] : ta(a.s, b);
  };
  aa = ua.prototype;
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new ua(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (qa(a) && this.h.hasOwnProperty(a)) || this.s.has(a);
  };
  aa.Rb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.s.Rb();
  };
  aa.Oe = function () {
    return this.D;
  };
  var wa = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].De + g > b[f].max) throw Error("Quota exceeded");
        b[f].De += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        mk: function (f) {
          c = f;
        },
        Jh: function () {
          c && a(c, 1);
        },
        pk: function (f) {
          d = f;
        },
        Tb: function (f) {
          d && a(d, f);
        },
        Lk: function (f, g) {
          b[f] = b[f] || { De: 0 };
          b[f].max = g;
        },
        Kj: function (f) {
          return (b[f] && b[f].De) || 0;
        },
        reset: function () {
          b = {};
        },
        xj: a,
      };
    e.onFnConsume = e.mk;
    e.consumeFn = e.Jh;
    e.onStorageConsume = e.pk;
    e.consumeStorage = e.Tb;
    e.setMax = e.Lk;
    e.getConsumed = e.Kj;
    e.reset = e.reset;
    e.consume = e.xj;
    return e;
  };
  var xa = function (a, b) {
    this.D = a;
    this.aa = function (c, d, e) {
      return c.apply(d, e);
    };
    this.H = b;
    this.s = new ra();
    this.h = this.K = void 0;
  };
  xa.prototype.add = function (a, b) {
    ya(this, a, b, !1);
  };
  var ya = function (a, b, c, d) {
    if (!a.s.Oe())
      if (
        (a.D.Tb(
          ("string" === typeof b ? b.length : 1) +
            ("string" === typeof c ? c.length : 1)
        ),
        d)
      ) {
        var e = a.s;
        e.set(b, c);
        e.K["dust." + b] = !0;
      } else a.s.set(b, c);
  };
  xa.prototype.set = function (a, b) {
    this.s.Oe() ||
      (!this.s.has(a) && this.H && this.H.has(a)
        ? this.H.set(a, b)
        : (this.D.Tb(
            ("string" === typeof a ? a.length : 1) +
              ("string" === typeof b ? b.length : 1)
          ),
          this.s.set(a, b)));
  };
  xa.prototype.get = function (a) {
    return this.s.has(a) ? this.s.get(a) : this.H ? this.H.get(a) : void 0;
  };
  xa.prototype.has = function (a) {
    return !!this.s.has(a) || !(!this.H || !this.H.has(a));
  };
  var za = function (a) {
    var b = new xa(a.D, a);
    a.K && (b.K = a.K);
    b.aa = a.aa;
    b.h = a.h;
    return b;
  };
  var Aa = function () {},
    Ba = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Ca = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Da = Array.isArray,
    Ga = function (a, b) {
      if (a && Da(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ha = function (a, b) {
      if (!Ca(a) || !Ca(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ka = function (a, b) {
      for (var c = new Ja(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    La = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ma = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Na = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Oa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Pa = function (a) {
      var b = [];
      if (Da(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Ja = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ja.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ja.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ta = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ua = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Va = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    $a = function (a, b) {
      var c = m;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    bb = /^\w{1,9}$/,
    cb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      La(a, function (d, e) {
        bb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    db = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var eb = function (a, b) {
    ra.call(this);
    this.aa = a;
    this.ab = b;
  };
  ma(eb, ra);
  eb.prototype.toString = function () {
    return this.aa;
  };
  eb.prototype.Qb = function () {
    return new ua(sa(this, 1));
  };
  eb.prototype.h = function (a, b) {
    a.D.Jh();
    return this.ab.apply(
      new fb(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  eb.prototype.s = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var hb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = gb(a, b[d])), c instanceof pa);
        d++
      );
      return c;
    },
    gb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof eb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.K;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    fb = function (a, b) {
      this.s = a;
      this.h = b;
    },
    z = function (a, b) {
      return Da(b) ? gb(a.h, b) : b;
    },
    F = function (a) {
      return a.s.aa;
    };
  var ib = function () {
    ra.call(this);
  };
  ma(ib, ra);
  ib.prototype.Qb = function () {
    return new ua(sa(this, 1));
  };
  var jb = {
    control: function (a, b) {
      return new pa(a, z(this, b));
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = z(this, b);
      if (!(e instanceof ua))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.h.D.Tb(a.length + f.length);
      return new eb(
        a,
        (function () {
          return function (g) {
            var h = za(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var l = Array.prototype.slice.call(arguments, 0), n = 0;
              n < l.length;
              n++
            )
              if (((l[n] = z(this, l[n])), l[n] instanceof pa)) return l[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new ua(l));
            var r = hb(h, f);
            if (r instanceof pa) return "return" === r.h ? r.s : r;
          };
        })()
      );
    },
    list: function (a) {
      var b = this.h.D;
      b.Tb(arguments.length);
      for (var c = new ua(), d = 0; d < arguments.length; d++) {
        var e = z(this, arguments[d]);
        "string" === typeof e && b.Tb(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.h.D, c = new ib(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = z(this, arguments[d]) + "",
          f = z(this, arguments[d + 1]),
          g = e.length;
        g += "string" === typeof f ? f.length : 1;
        b.Tb(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var kb = function () {
      this.D = wa();
      this.h = new xa(this.D);
    },
    lb = function (a, b, c) {
      var d = new eb(b, c);
      d.Rb();
      a.h.set(b, d);
    },
    mb = function (a, b, c) {
      jb.hasOwnProperty(b) && lb(a, c || b, jb[b]);
    };
  kb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.s(c);
  };
  kb.prototype.s = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = gb(this.h, arguments[c]);
    return b;
  };
  kb.prototype.H = function (a, b) {
    var c = za(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = gb(c, arguments[e]);
    return d;
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var nb,
    ob = function () {
      if (void 0 === nb) {
        var a = null,
          b = na.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: oa,
              createScript: oa,
              createScriptURL: oa,
            });
          } catch (c) {
            na.console && na.console.error(c.message);
          }
          nb = a;
        } else nb = a;
      }
      return nb;
    };
  var qb = function (a, b) {
    this.h = b === pb ? a : "";
  };
  qb.prototype.toString = function () {
    return this.h + "";
  };
  var rb = function (a) {
      return a instanceof qb && a.constructor === qb
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    pb = {},
    sb = function (a) {
      var b = a,
        c = ob(),
        d = c ? c.createScriptURL(b) : b;
      return new qb(d, pb);
    };
  var tb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function ub() {
    var a = na.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function vb(a) {
    return -1 != ub().indexOf(a);
  }
  function wb() {
    return vb("Firefox") || vb("FxiOS");
  }
  function xb() {
    return ((vb("Chrome") || vb("CriOS")) && !vb("Edge")) || vb("Silk");
  }
  var yb = {},
    zb = function (a, b) {
      this.h = b === yb ? a : "";
    };
  zb.prototype.toString = function () {
    return this.h.toString();
  };
  var Ab = function (a) {
      return a instanceof zb && a.constructor === zb
        ? a.h
        : "type_error:SafeHtml";
    },
    Bb = function (a) {
      var b = a,
        c = ob(),
        d = c ? c.createHTML(b) : b;
      return new zb(d, yb);
    };
  var Cb = {};
  var Db = function () {},
    Eb = function (a) {
      this.h = a;
    };
  ma(Eb, Db);
  Eb.prototype.toString = function () {
    return this.h;
  };
  function Fb(a, b) {
    var c = [new Eb(Gb[0].toLowerCase(), Cb)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Eb) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Hb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var m = window,
    H = document,
    Ib = navigator,
    Jb = H.currentScript && H.currentScript.src,
    Kb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Lb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Mb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Nb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Ob(a, b, c) {
    b &&
      La(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Pb = function (a, b, c, d, e) {
      var f = H.createElement("script");
      Ob(f, d, Mb);
      f.type = "text/javascript";
      f.async = !0;
      var g = sb(a);
      f.src = rb(g);
      var h,
        l,
        n,
        p =
          null ==
          (n = (l = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(l, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Lb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Qb = function () {
      if (Jb) {
        var a = Jb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Rb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = H.createElement("iframe")), (h = !0));
      Ob(g, c, Nb);
      d &&
        La(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var l = (H.body && H.body.lastChild) || H.body || H.head;
        l.parentNode.insertBefore(g, l);
      }
      Lb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Sb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Tb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Ub = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      m.setTimeout(a, 0);
    },
    Vb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Wb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Xb = function (a) {
      var b = H.createElement("div"),
        c = b,
        d = Bb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Hb(c);
      c.innerHTML = Ab(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Yb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Zb = function (a) {
      var b;
      try {
        b = Ib.sendBeacon && Ib.sendBeacon(a);
      } catch (c) {}
      b || Sb(a);
    },
    $b = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var ac = function (a, b) {
      return z(this, a) && z(this, b);
    },
    bc = function (a, b) {
      return z(this, a) === z(this, b);
    },
    cc = function (a, b) {
      return z(this, a) || z(this, b);
    },
    dc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    ec = function (a, b) {
      a = String(z(this, a));
      b = String(z(this, b));
      return a.substring(0, b.length) === b;
    },
    fc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      switch (a) {
        case "pageLocation":
          var c = m.location.href;
          b instanceof ib &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var hc = function () {
    this.h = new kb();
    gc(this);
  };
  hc.prototype.execute = function (a) {
    return this.h.s(a);
  };
  var gc = function (a) {
    mb(a.h, "map");
    var b = function (c, d) {
      lb(a.h, c, d);
    };
    b("and", ac);
    b("contains", dc);
    b("equals", bc);
    b("or", cc);
    b("startsWith", ec);
    b("variable", fc);
  };
  var ic = function (a) {
    if (a instanceof ic) return a;
    this.Za = a;
  };
  ic.prototype.toString = function () {
    return String(this.Za);
  };
  var kc = function (a) {
    ra.call(this);
    this.h = a;
    this.set("then", jc(this));
    this.set("catch", jc(this, !0));
    this.set("finally", jc(this, !1, !0));
  };
  ma(kc, ib);
  var jc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new eb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof eb || (d = void 0);
      e instanceof eb || (e = void 0);
      var f = za(this.h),
        g = function (l) {
          return function (n) {
            return c ? (l.h(f), a.h) : l.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new kc(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var lc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    mc = function (a) {
      if (null == a) return String(a);
      var b = lc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    oc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    pc = function (a) {
      if (!a || "object" != mc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !oc(a, "constructor") &&
          !oc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || oc(a, b);
    },
    K = function (a, b) {
      var c = b || ("array" == mc(a) ? [] : {}),
        d;
      for (d in a)
        if (oc(a, d)) {
          var e = a[d];
          "array" == mc(e)
            ? ("array" != mc(c[d]) && (c[d] = []), (c[d] = K(e, c[d])))
            : pc(e)
            ? (pc(c[d]) || (c[d] = {}), (c[d] = K(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var rc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, l) {
          for (var n = sa(h, 1), p = 0; p < n.length; p++)
            l[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var l = d.indexOf(h);
          if (-1 < l) return e[l];
          if (h instanceof ua) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Qb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof kc) return h.h;
          if (h instanceof ib) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof eb) {
            var u = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), w = 0;
                w < v.length;
                w++
              )
                v[w] = qc(v[w], b, c);
              var x = b ? b.D : wa(),
                y = new xa(x);
              b && (y.h = b.h);
              return g(h.h.apply(h, [y].concat(v)));
            };
            d.push(h);
            e.push(u);
            f(h, u);
            return u;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (h instanceof ic && t) return h.Za;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    qc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, l) {
          for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]));
        },
        g = function (h) {
          var l = d.indexOf(h);
          if (-1 < l) return e[l];
          if (Da(h) || Ma(h)) {
            var n = new ua([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (pc(h)) {
            var q = new ib();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new eb("", function (y) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = rc(z(this, A[B]), b, c);
              return g((0, this.h.aa)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var w = typeof h;
          if (null === h || "string" === w || "number" === w || "boolean" === w)
            return h;
          var x = !1;
          switch (c) {
            case 1:
              x = !0;
              break;
            case 2:
              x = !1;
              break;
            default:
          }
          if (void 0 !== h && x) return new ic(h);
        };
      return g(a);
    };
  var sc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    tc = function (a) {
      if (void 0 === a || Da(a) || pc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var uc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof ua)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new ua(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new ua(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new ua(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = sc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ua(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = sc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var vc =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " "
      ),
    wc = new pa("break"),
    xc = new pa("continue"),
    yc = function (a, b) {
      return z(this, a) + z(this, b);
    },
    zc = function (a, b) {
      return z(this, a) && z(this, b);
    },
    Ac = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (!(c instanceof ua))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = rc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= vc.indexOf(b)) {
          var f = rc(c);
          return qc(a[b].apply(a, f), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof ua) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof eb) {
            var h = sc(c);
            h.unshift(this.h);
            return g.h.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= uc.supportedMethods.indexOf(b)) {
          var l = sc(c);
          l.unshift(this.h);
          return uc[b].apply(a, l);
        }
      }
      if (a instanceof eb || a instanceof ib) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof eb) {
            var p = sc(c);
            p.unshift(this.h);
            return n.h.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof eb ? a.aa : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, sc(c));
      }
      if (a instanceof ic && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Bc = function (a, b) {
      a = z(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = z(this, b);
      c.set(a, d);
      return d;
    },
    Cc = function (a) {
      var b = za(this.h),
        c = hb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof pa) return c;
    },
    Dc = function () {
      return wc;
    },
    Fc = function (a) {
      for (var b = z(this, a), c = 0; c < b.length; c++) {
        var d = z(this, b[c]);
        if (d instanceof pa) return d;
      }
    },
    Gc = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = z(this, arguments[c + 1]);
          ya(b, d, e, !0);
        }
      }
    },
    Hc = function () {
      return xc;
    },
    Ic = function (a, b, c) {
      var d = new ua();
      b = z(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, z(this, f));
    },
    Jc = function (a, b) {
      return z(this, a) / z(this, b);
    },
    Kc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      var c = a instanceof ic,
        d = b instanceof ic;
      return c || d ? (c && d ? a.Za == b.Za : !1) : a == b;
    },
    Lc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]);
      return b;
    };
  function Mc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = hb(f, d);
      if (g instanceof pa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Nc(a, b, c) {
    if ("string" === typeof b)
      return Mc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof ib || b instanceof ua || b instanceof eb) {
      var d = b.Qb(),
        e = d.length();
      return Mc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Oc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Nc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Pc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Nc(
        function (e) {
          var f = za(d);
          ya(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Qc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Nc(
        function (e) {
          var f = za(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Sc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Tc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          var f = za(d);
          ya(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Uc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          var f = za(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Rc(a, b, c) {
    if ("string" === typeof b)
      return Mc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof ua)
      return Mc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var Vc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var u = f.get(r);
          q.add(u, p.get(u));
        }
      }
      var f = z(this, a);
      if (!(f instanceof ua))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = z(this, d);
      var h = za(g);
      for (e(g, h); gb(h, b); ) {
        var l = hb(h, d);
        if (l instanceof pa) {
          if ("break" === l.h) break;
          if ("return" === l.h) return l;
        }
        var n = za(g);
        e(h, n);
        gb(n, c);
        h = n;
      }
    },
    Wc = function (a) {
      a = z(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Xc = function (a, b) {
      var c;
      a = z(this, a);
      b = z(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof ib || a instanceof ua || a instanceof eb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : qa(b) && (c = a[b]);
      else if (a instanceof ic) return;
      return c;
    },
    Yc = function (a, b) {
      return z(this, a) > z(this, b);
    },
    Zc = function (a, b) {
      return z(this, a) >= z(this, b);
    },
    $c = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      a instanceof ic && (a = a.Za);
      b instanceof ic && (b = b.Za);
      return a === b;
    },
    ad = function (a, b) {
      return !$c.call(this, a, b);
    },
    bd = function (a, b, c) {
      var d = [];
      z(this, a) ? (d = z(this, b)) : c && (d = z(this, c));
      var e = hb(this.h, d);
      if (e instanceof pa) return e;
    },
    cd = function (a, b) {
      return z(this, a) < z(this, b);
    },
    dd = function (a, b) {
      return z(this, a) <= z(this, b);
    },
    gd = function (a, b) {
      return z(this, a) % z(this, b);
    },
    hd = function (a, b) {
      return z(this, a) * z(this, b);
    },
    id = function (a) {
      return -z(this, a);
    },
    jd = function (a) {
      return !z(this, a);
    },
    kd = function (a, b) {
      return !Kc.call(this, a, b);
    },
    ld = function () {
      return null;
    },
    md = function (a, b) {
      return z(this, a) || z(this, b);
    },
    nd = function (a, b) {
      var c = z(this, a);
      z(this, b);
      return c;
    },
    od = function (a) {
      return z(this, a);
    },
    pd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    qd = function (a) {
      return new pa("return", z(this, a));
    },
    rd = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof eb || a instanceof ua || a instanceof ib) && a.set(b, c);
      return c;
    },
    sd = function (a, b) {
      return z(this, a) - z(this, b);
    },
    td = function (a, b, c) {
      a = z(this, a);
      var d = z(this, b),
        e = z(this, c);
      if (!Da(d) || !Da(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === z(this, d[h]))
          if (((f = z(this, e[h])), f instanceof pa)) {
            var l = f.h;
            if ("break" === l) return;
            if ("return" === l || "continue" === l) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = z(this, e[e.length - 1])),
        f instanceof pa && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    ud = function (a, b, c) {
      return z(this, a) ? z(this, b) : z(this, c);
    },
    vd = function (a) {
      a = z(this, a);
      return a instanceof eb ? "function" : typeof a;
    },
    wd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    xd = function (a, b, c, d) {
      var e = z(this, d);
      if (z(this, c)) {
        var f = hb(this.h, e);
        if (f instanceof pa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; z(this, a); ) {
        var g = hb(this.h, e);
        if (g instanceof pa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        z(this, b);
      }
    },
    yd = function (a) {
      return ~Number(z(this, a));
    },
    zd = function (a, b) {
      return Number(z(this, a)) << Number(z(this, b));
    },
    Ad = function (a, b) {
      return Number(z(this, a)) >> Number(z(this, b));
    },
    Bd = function (a, b) {
      return Number(z(this, a)) >>> Number(z(this, b));
    },
    Cd = function (a, b) {
      return Number(z(this, a)) & Number(z(this, b));
    },
    Dd = function (a, b) {
      return Number(z(this, a)) ^ Number(z(this, b));
    },
    Ed = function (a, b) {
      return Number(z(this, a)) | Number(z(this, b));
    };
  var Id = function () {
    this.h = new kb();
    Fd(this);
  };
  Id.prototype.execute = function (a) {
    return Jd(this.h.s(a));
  };
  var Kd = function (a, b, c) {
      return Jd(a.h.H(b, c));
    },
    Fd = function (a) {
      var b = function (d, e) {
        mb(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        lb(a.h, String(d), e);
      };
      c(0, yc);
      c(1, zc);
      c(2, Ac);
      c(3, Bc);
      c(53, Cc);
      c(4, Dc);
      c(5, Fc);
      c(52, Gc);
      c(6, Hc);
      c(9, Fc);
      c(50, Ic);
      c(10, Jc);
      c(12, Kc);
      c(13, Lc);
      c(47, Oc);
      c(54, Pc);
      c(55, Qc);
      c(63, Vc);
      c(64, Sc);
      c(65, Tc);
      c(66, Uc);
      c(15, Wc);
      c(16, Xc);
      c(17, Xc);
      c(18, Yc);
      c(19, Zc);
      c(20, $c);
      c(21, ad);
      c(22, bd);
      c(23, cd);
      c(24, dd);
      c(25, gd);
      c(26, hd);
      c(27, id);
      c(28, jd);
      c(29, kd);
      c(45, ld);
      c(30, md);
      c(32, nd);
      c(33, nd);
      c(34, od);
      c(35, od);
      c(46, pd);
      c(36, qd);
      c(43, rd);
      c(37, sd);
      c(38, td);
      c(39, ud);
      c(40, vd);
      c(41, wd);
      c(42, xd);
      c(58, yd);
      c(57, zd);
      c(60, Ad);
      c(61, Bd);
      c(56, Cd);
      c(62, Dd);
      c(59, Ed);
    };
  function Jd(a) {
    if (
      a instanceof pa ||
      a instanceof eb ||
      a instanceof ua ||
      a instanceof ib ||
      a instanceof ic ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Ld = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      ui: a("consent"),
      sg: a("convert_case_to"),
      ug: a("convert_false_to"),
      vg: a("convert_null_to"),
      wg: a("convert_true_to"),
      xg: a("convert_undefined_to"),
      Uk: a("debug_mode_metadata"),
      Pb: a("function"),
      yf: a("instance_name"),
      ej: a("live_only"),
      fj: a("malware_disabled"),
      gj: a("metadata"),
      kj: a("original_activity_id"),
      Xk: a("original_vendor_template_id"),
      Wk: a("once_on_load"),
      jj: a("once_per_event"),
      xh: a("once_per_load"),
      Yk: a("priority_override"),
      Zk: a("respected_consent_types"),
      Bh: a("setup_tags"),
      Ch: a("tag_id"),
      Dh: a("teardown_tags"),
    };
  })();
  var ge;
  var he = [],
    ie = [],
    je = [],
    ke = [],
    le = [],
    me = {},
    ne,
    oe,
    qe = function () {
      var a = pe;
      oe = oe || a;
    },
    re,
    se = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    te = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = me[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.Ih && d.Ih(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.Hh && (f.vtp_gtmCachedValues = d.Hh);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var l = b.index;
            if (null == l) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = he[l];
                  break;
                case 1:
                  n = ke[l];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[Ld.yf];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : ge(c, f, b);
    },
    ve = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = ue(a[e], b, c));
      return d;
    },
    ue = function (a, b, c) {
      if (Da(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(ue(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = he[f];
            if (!g || b.Rf(g)) return;
            c[f] = !0;
            var h = String(g[Ld.yf]);
            try {
              var l = ve(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = te(l, { event: b, index: f, type: 2, name: h });
              re && (d = re.yj(d, l));
            } catch (y) {
              b.Uh && b.Uh(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[ue(a[n], b, c)] = ue(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = ue(a[q], b, c);
              oe && (p = p || r === oe.se);
              d.push(r);
            }
            return oe && p ? oe.zj(d) : d.join("");
          case "escape":
            d = ue(a[1], b, c);
            if (oe && Da(a[1]) && "macro" === a[1][0] && oe.Yj(a))
              return oe.vk(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Md[a[u]] && (d = Md[a[u]](d));
            return d;
          case "tag":
            var t = a[1];
            if (!ke[t])
              throw Error("Unable to resolve tag reference " + t + ".");
            return (d = { Oh: a[2], index: t });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = we(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    we = function (a, b, c) {
      try {
        return ne(ve(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var ze = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.s = a;
    this.h = c;
  };
  ma(ze, Error);
  function Ae(a, b) {
    if (Da(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Ae(a[c], b[c]);
    }
  }
  var Be = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.qk = a;
    this.s = b;
    this.h = [];
  };
  ma(Be, Error);
  var De = function () {
    return function (a, b) {
      a instanceof Be || (a = new Be(a, Ce));
      b && a.h.push(b);
      throw a;
    };
  };
  function Ce(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ca(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Ge = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Ee(a), f = 0; f < ie.length; f++) {
        var g = ie[f],
          h = Fe(g, e);
        if (h) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < ke.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Fe = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Ee = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = we(je[c], a));
        return b[c];
      };
    };
  var He = {
    yj: function (a, b) {
      b[Ld.sg] &&
        "string" === typeof a &&
        (a = 1 == b[Ld.sg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ld.vg) && null === a && (a = b[Ld.vg]);
      b.hasOwnProperty(Ld.xg) && void 0 === a && (a = b[Ld.xg]);
      b.hasOwnProperty(Ld.wg) && !0 === a && (a = b[Ld.wg]);
      b.hasOwnProperty(Ld.ug) && !1 === a && (a = b[Ld.ug]);
      return a;
    },
  };
  var Ie = function () {
    this.h = {};
  };
  function Je(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new ze(c, d, g);
      }
  }
  function Ke(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Je(e, b, d, g);
          Je(f, b, d, g);
        }
      }
    };
  }
  var Oe = function () {
      var a = data.permissions || {},
        b = Le.P,
        c = this;
      this.s = new Ie();
      this.h = {};
      var d = {},
        e = Ke(this.s, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      La(a, function (f, g) {
        var h = {};
        La(g, function (l, n) {
          var p = Me(l, n);
          h[l] = p.assert;
          d[l] || (d[l] = p.ca);
        });
        c.h[f] = function (l, n) {
          var p = h[l];
          if (!p)
            throw Ne(
              l,
              {},
              "The requested permission " + l + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Qe = function (a) {
      return Pe.h[a] || function () {};
    };
  function Me(a, b) {
    var c = se(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ne;
    try {
      return te(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new ze(e, {}, "Permission " + e + " is unknown.");
        },
        ca: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Ne(a, b, c) {
    return new ze(a, b, c);
  }
  var Re = !1;
  var Se = {};
  Se.Tk = Oa("");
  Se.Bj = Oa("");
  var Te = Re,
    Ue = Se.Bj,
    Ve = Se.Tk;
  var We = function (a, b) {
    var c = String(a);
    return c;
  };
  var af = function (a) {
      var b = {},
        c = 0;
      La(a, function (e, f) {
        if (void 0 !== f)
          if (((f = We(f, 100)), Xe.hasOwnProperty(e))) b[Xe[e]] = Ye(f);
          else if (Ze.hasOwnProperty(e)) {
            var g = Ze[e],
              h = Ye(f);
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ("category" === e)
            for (var l = Ye(f).split("/", 5), n = 0; n < l.length; n++) {
              var p = $e[n],
                q = l[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else
            10 > c && ((b["k" + c] = Ye(We(e, 40))), (b["v" + c] = Ye(f)), c++);
      });
      var d = [];
      La(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    Ye = function (a) {
      return ("" + a).replace(/~/g, function () {
        return "~~";
      });
    },
    Xe = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    Ze = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    $e = ["ca", "c2", "c3", "c4", "c5"];
  var bf = function (a) {
      var b = [];
      La(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    cf = function (a, b, c, d) {
      this.Ja = a.Ja;
      this.Yb = a.Yb;
      this.Fb = a.Fb;
      this.h = b;
      this.H = c;
      this.D = bf(a.Ja);
      this.s = bf(a.Fb);
      this.K = this.s.length;
      if (d && 16384 < this.K) throw Error("EVENT_TOO_LARGE");
    };
  var df = function () {
    this.events = [];
    this.h = this.Ja = "";
    this.D = 0;
    this.s = !1;
  };
  df.prototype.add = function (a) {
    return this.H(a)
      ? (this.events.push(a),
        (this.Ja = a.D),
        (this.h = a.h),
        (this.D += a.K),
        (this.s = a.H),
        !0)
      : !1;
  };
  df.prototype.H = function (a) {
    var b = 20 > this.events.length && 16384 > a.K + this.D,
      c = this.Ja === a.D && this.h === a.h && this.s === a.H;
    return 0 == this.events.length || (b && c);
  };
  var ef = function (a, b) {
      La(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    ff = function (a, b) {
      var c = [];
      a.D && c.push(a.D);
      b && c.push("_s=" + b);
      ef(a.Yb, c);
      var d = !1;
      a.s && (c.push(a.s), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.h.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join("&")));
      return { eg: e, body: f };
    },
    gf = function (a, b) {
      var c = a.events;
      if (1 == c.length) return ff(c[0], b);
      var d = [];
      a.Ja && d.push(a.Ja);
      for (var e = {}, f = 0; f < c.length; f++)
        La(c[f].Yb, function (u, t) {
          null != t &&
            ((e[u] = e[u] || {}), (e[u][String(t)] = e[u][String(t)] + 1 || 1));
        });
      var g = {};
      La(e, function (u, t) {
        var v,
          w = -1,
          x = 0;
        La(t, function (y, A) {
          x += A;
          var B = (y.length + u.length + 2) * (A - 1);
          B > w && ((v = y), (w = B));
        });
        x == c.length && (g[u] = v);
      });
      ef(g, d);
      b && d.push("_s=" + b);
      for (
        var h = d.join("&"), l = [], n = {}, p = 0;
        p < c.length;
        n = { Sd: n.Sd }, p++
      ) {
        var q = [];
        n.Sd = {};
        La(
          c[p].Yb,
          (function (u) {
            return function (t, v) {
              g[t] != "" + v && (u.Sd[t] = v);
            };
          })(n)
        );
        c[p].s && q.push(c[p].s);
        ef(n.Sd, q);
        l.push(q.join("&"));
      }
      var r = l.join("\r\n");
      return { eg: h, body: r };
    };
  var rf =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    sf = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = rf.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          l = c[d];
        if (null == l) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof l;
          l instanceof eb
            ? (n = "Fn")
            : l instanceof ua
            ? (n = "List")
            : l instanceof ib
            ? (n = "DustMap")
            : l instanceof ic && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (sf[n] || n) +
                ", which does not match required type " +
                (sf[h] || h) +
                "."
            );
        }
      }
    };
  function tf(a) {
    return "" + a;
  }
  function uf(a, b) {
    var c = [];
    return c;
  }
  var vf = function (a, b) {
      var c = new eb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = z(this, d[e]);
        return b.apply(this, d);
      });
      c.Rb();
      return c;
    },
    wf = function (a, b) {
      var c = new ib(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ba(e)
            ? c.set(d, vf(a + "_" + d, e))
            : (Ca(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Rb();
      return c;
    };
  var xf = function (a, b) {
    L(F(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new ib();
    return (d = wf("AssertApiSubject", c));
  };
  var yf = function (a, b) {
    L(F(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof kc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new ib();
    return (d = wf("AssertThatSubject", c));
  };
  function zf(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(rc(arguments[d], c));
      return qc(a.apply(null, b));
    };
  }
  var Bf = function () {
    for (var a = Math, b = Af, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = zf(a[e].bind(a)));
    }
    return c;
  };
  var Ff = function (a) {
    var b;
    return b;
  };
  var Gf = function (a) {
    var b;
    return b;
  };
  var Hf = function (a) {
    return encodeURI(a);
  };
  var If = function (a) {
    return encodeURIComponent(a);
  };
  var Jf = function (a) {
    L(F(this), ["message:?string"], arguments);
  };
  var Kf = function (a, b) {
    L(F(this), ["min:!number", "max:!number"], arguments);
    return Ha(a, b);
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    d.uj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Lf = function () {
    M(this, "read_container_data");
    var a = new ib();
    a.set("containerId", "G-62P3FH3XKV");
    a.set("version", "1");
    a.set("environmentName", "");
    a.set("debugMode", Te);
    a.set("previewMode", Ve);
    a.set("environmentMode", Ue);
    a.Rb();
    return a;
  };
  var Mf = {};
  Mf.enable1pScripts = !0;
  Mf.enableGa4OnoRemarketing = !1;
  Mf.enableEmFormCcd = !1;
  Mf.enableEmFormCcd = !0;
  Mf.enableEmFormCcdPart2 = !1;
  Mf.enableLandingPageDeduplication = !0;
  Mf.enableFloodlightPrerenderingBypass = !1;
  Mf.analyticsPrivateParamsExcluded = !1;
  Mf.ipOverrideExperiment = !1;
  Mf.ipOverrideExperiment = !0;
  Mf.enableAdsConsentedConversionsOnly = !1;
  Mf.enableFlConsentedConversionsOnly = !1;
  Mf.enableFlConsentedConversionsOnly = !0;
  Mf.enableAdsHistoryChangeEvents = !1;
  Mf.enableAdsHistoryChangeEvents = !0;
  Mf.enableEValue = !1;
  Mf.enableEValue = !0;
  Mf.enableEuidAutoMode = !1;
  Mf.enableAlwaysSendFormStart = !1;
  Mf.enableAlwaysSendFormStart = !0;
  Mf.enableRemarketingAuid = !1;
  Mf.requireGtagUserDataTos = !0;
  Mf.enableHashedFieldsInEc = !1;
  Mf.enableCcdEnhancedMeasurement = !1;
  Mf.sendBeaconEnableExperimentPercentage = Number("0") || 0;
  function Nf() {
    return qc(Mf);
  }
  Nf.N = "internal.getFlags";
  var Of = function () {
    return new Date().getTime();
  };
  var Pf = function (a) {
    if (null === a) return "null";
    if (a instanceof ua) return "array";
    if (a instanceof eb) return "function";
    if (a instanceof ic) {
      a = a.Za;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Qf = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Te || Ve) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return qc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(rc(c));
      }),
    };
  };
  var Rf = function (a) {
    return Na(rc(a, this.h));
  };
  var Sf = function (a) {
    return Number(rc(a, this.h));
  };
  var Tf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Uf = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Af = "floor ceil round max min abs pow sqrt".split(" ");
  var Vf = function () {
      var a = {};
      return {
        Mj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Mk: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Wf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return eb.prototype.h.apply(a, c);
      };
    },
    Xf = function (a, b) {
      L(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Yf = {};
  Yf.keys = function (a) {
    return new ua();
  };
  Yf.values = function (a) {
    return new ua();
  };
  Yf.entries = function (a) {
    return new ua();
  };
  Yf.freeze = function (a) {
    return a;
  };
  Yf.delete = function (a, b) {
    return !1;
  };
  var $f = function () {
    this.h = {};
    this.s = {};
  };
  $f.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  $f.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.s.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ba(b) ? vf(a, b) : wf(a, b);
  };
  function ag(a, b) {
    var c = void 0;
    return c;
  }
  function bg() {
    var a = {};
    return a;
  }
  var dg = function (a) {
      return cg ? H.querySelectorAll(a) : null;
    },
    eg = function (a, b) {
      if (!cg) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    fg = !1;
  if (H.querySelectorAll)
    try {
      var gg = H.querySelectorAll(":root");
      gg && 1 == gg.length && gg[0] == H.documentElement && (fg = !0);
    } catch (a) {}
  var cg = fg;
  var hg = [];
  hg[3] = !0;
  hg[20] = !0;
  hg[21] = !0;
  hg[22] = !0;
  hg[17] = !0;
  hg[19] = !0;
  hg[31] = !0;
  var ig = {},
    jg = function (a, b) {
      ig[a] = ig[a] || [];
      ig[a][b] = !0;
    },
    kg = function () {
      delete ig.GA4_EVENT;
    },
    lg = function (a) {
      for (var b = [], c = ig[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    mg = function () {
      for (var a = [], b = ig.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var N = function (a) {
    jg("GTM", a);
  };
  var ng = function (a) {
      return null == a ? "" : k(a) ? Qa(String(a)) : "e0";
    },
    pg = function (a) {
      return a.replace(og, "");
    },
    rg = function (a) {
      return qg(a.replace(/\s/g, ""));
    },
    qg = function (a) {
      return Qa(a.replace(sg, "").toLowerCase());
    },
    ug = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return tg.test(a) ? a : "e0";
    },
    wg = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (vg.test(c)) return c;
      }
      return "e0";
    },
    zg = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== xg.indexOf(c.name)
            ? yg(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    yg = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle) {
        if (hg[28] && Ag(a)) return Promise.resolve(Bg(a));
        try {
          var b = Cg(a);
          return m.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                  .map(function (f) {
                    return String.fromCharCode(f);
                  })
                  .join(""),
                e = m.btoa(d);
              return Bg(e);
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Bg = function (a) {
      return a.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    },
    Ag = function (a) {
      return /^[0-9A-Za-z/+_-]{43}=?$/.test(a);
    },
    Cg = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    sg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    vg = /^\S+@\S+\.\S+$/,
    tg = /^\+\d{10,15}$/,
    og = /[.~]/g,
    Dg = {},
    Eg =
      ((Dg.email = "em"),
      (Dg.phone_number = "pn"),
      (Dg.first_name = "fn"),
      (Dg.last_name = "ln"),
      (Dg.street = "sa"),
      (Dg.city = "ct"),
      (Dg.region = "rg"),
      (Dg.country = "co"),
      (Dg.postal_code = "pc"),
      (Dg.error_code = "ec"),
      Dg),
    Fg = {},
    Gg =
      ((Fg.email = "sha256_email_address"),
      (Fg.phone_number = "sha256_phone_number"),
      (Fg.first_name = "sha256_first_name"),
      (Fg.last_name = "sha256_last_name"),
      (Fg.street = "sha256_street"),
      Fg),
    Hg = function (a, b) {
      function c(u, t, v, w) {
        var x = ng(u);
        "" !== x &&
          (hg[28] && Ag(x)
            ? l.push({ name: t, value: x, index: w })
            : l.push({ name: t, value: v(x), index: w }));
      }
      function d(u, t) {
        var v = u;
        if (k(v) || Da(v)) {
          v = Da(u) ? u : [u];
          for (var w = 0; w < v.length; ++w) {
            var x = ng(v[w]),
              y = Ag(x);
            t && !y && N(89);
            !t && y && N(88);
          }
        }
      }
      function e(u, t) {
        var v = u[t];
        d(v, !1);
        var w = Gg[t];
        hg[28] &&
          u.hasOwnProperty(w) &&
          (u.hasOwnProperty(t) && N(90), (v = u[w]), d(v, !0));
        return v;
      }
      function f(u, t, v) {
        var w = e(u, t);
        w = Da(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], t, v);
      }
      function g(u, t, v, w) {
        var x = e(u, t);
        c(x, t, v, w);
      }
      function h(u) {
        return function (t) {
          N(64);
          return u(t);
        };
      }
      var l = [];
      if ("https:" === m.location.protocol) {
        f(a, "email", wg);
        f(a, "phone_number", ug);
        f(a, "first_name", h(rg));
        f(a, "last_name", h(rg));
        var n = a.home_address || {};
        f(n, "street", h(qg));
        f(n, "city", h(qg));
        f(n, "postal_code", h(pg));
        f(n, "region", h(qg));
        f(n, "country", h(pg));
        var p = a.address || {};
        p = Da(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", rg, q);
          g(r, "last_name", rg, q);
          g(r, "street", qg, q);
          g(r, "city", qg, q);
          g(r, "postal_code", pg, q);
          g(r, "region", qg, q);
          g(r, "country", pg, q);
        }
        zg(l, b);
      } else l.push({ name: "error_code", value: "e3", index: void 0 }), b(l);
    },
    Ig = function (a, b) {
      Hg(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            l = c[f].index,
            n = Eg[g];
          n &&
            h &&
            (-1 === xg.indexOf(g) ||
              /^e\d+$/.test(h) ||
              /^[0-9A-Za-z_-]{43}$/.test(h)) &&
            (void 0 !== l && (n += l), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Jg = function (a) {
      if (m.Promise)
        try {
          return new Promise(function (b) {
            Ig(a, function (c, d) {
              b({ Ed: c, uk: d });
            });
          });
        } catch (b) {}
    },
    xg = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var Q = {
      g: {
        I: "ad_storage",
        X: "analytics_storage",
        Ue: "region",
        qg: "consent_updated",
        rg: "wait_for_update",
        xi: "app_remove",
        yi: "app_store_refund",
        zi: "app_store_subscription_cancel",
        Ai: "app_store_subscription_convert",
        Bi: "app_store_subscription_renew",
        zg: "add_payment_info",
        Ag: "add_shipping_info",
        Kc: "add_to_cart",
        Lc: "remove_from_cart",
        Bg: "view_cart",
        cc: "begin_checkout",
        Mc: "select_item",
        Ib: "view_item_list",
        fc: "select_promotion",
        Jb: "view_promotion",
        La: "purchase",
        Nc: "refund",
        Qa: "view_item",
        Cg: "add_to_wishlist",
        Ci: "first_open",
        Di: "first_visit",
        Da: "gtag.config",
        Ma: "gtag.get",
        Ei: "in_app_purchase",
        Oc: "page_view",
        Fi: "session_start",
        We: "user_engagement",
        hc: "gclid",
        oa: "ads_data_redaction",
        ia: "allow_ad_personalization_signals",
        Xe: "allow_custom_scripts",
        Gi: "allow_display_features",
        Pc: "allow_enhanced_conversions",
        Qc: "allow_google_signals",
        Ea: "allow_interest_groups",
        Vd: "auid",
        Hi: "auto_detection_enabled",
        nb: "aw_remarketing",
        Wd: "aw_remarketing_only",
        Rc: "discount",
        Sc: "aw_feed_country",
        Tc: "aw_feed_language",
        ja: "items",
        Uc: "aw_merchant_id",
        Dg: "aw_basket_type",
        Xd: "campaign_content",
        Yd: "campaign_id",
        Zd: "campaign_medium",
        ae: "campaign_name",
        Vc: "campaign",
        be: "campaign_source",
        ce: "campaign_term",
        Ab: "client_id",
        Ii: "content_group",
        Ji: "content_type",
        Na: "conversion_cookie_prefix",
        Wc: "conversion_id",
        ob: "conversion_label",
        za: "conversion_linker",
        Ye: "conversion_api",
        pb: "cookie_domain",
        Ra: "cookie_expires",
        qb: "cookie_flags",
        Xc: "cookie_name",
        Ze: "cookie_path",
        rb: "cookie_prefix",
        Kb: "cookie_update",
        ic: "country",
        xa: "currency",
        Yc: "customer_lifetime_value",
        Zc: "custom_map",
        Ki: "debug_mode",
        ka: "developer_id",
        Eg: "disable_merchant_reported_purchases",
        Li: "dc_custom_params",
        Mi: "dc_natural_search",
        af: "dynamic_event_settings",
        Ni: "affiliation",
        Fg: "checkout_option",
        Gg: "checkout_step",
        Oi: "coupon",
        Hg: "item_list_name",
        Ig: "list_name",
        Pi: "promotions",
        ad: "shipping",
        Jg: "tax",
        de: "engagement_time_msec",
        bd: "enhanced_client_id",
        cd: "enhanced_conversions",
        Kg: "enhanced_conversions_automatic_settings",
        Lg: "enhanced_conversions_mode",
        dd: "estimated_delivery_date",
        bf: "euid_logged_in_state",
        jc: "event_callback",
        kc: "event_developer_id_string",
        Mg: "event",
        ee: "event_settings",
        fe: "event_timeout",
        Qi: "experiments",
        cf: "firebase_id",
        he: "first_party_collection",
        ie: "_x_20",
        Lb: "_x_19",
        Ng: "fledge",
        Og: "gac_gclid",
        je: "gac_wbraid",
        Pg: "gac_wbraid_multiple_conversions",
        ed: "ga_restrict_domain",
        df: "ga_temp_client_id",
        Qg: "gdpr_applies",
        Rg: "geo_granularity",
        sb: "value_callback",
        cb: "value_key",
        mc: "global_developer_id_string",
        Vk: "google_ono",
        Bb: "google_signals",
        ke: "google_tld",
        me: "groups",
        Sg: "gsa_experiment_id",
        Tg: "iframe_state",
        ne: "ignore_referrer",
        ef: "internal_traffic_results",
        Ug: "is_passthrough",
        Sa: "language",
        ff: "legacy_developer_id_string",
        Aa: "linker",
        nc: "accept_incoming",
        oc: "decorate_forms",
        Z: "domains",
        fd: "url_position",
        Vg: "method",
        qc: "new_customer",
        Wg: "non_interaction",
        Ri: "optimize_id",
        Ta: "page_location",
        hf: "page_path",
        eb: "page_referrer",
        sc: "page_title",
        Xg: "passengers",
        Yg: "phone_conversion_callback",
        Si: "phone_conversion_country_code",
        Zg: "phone_conversion_css_class",
        Ti: "phone_conversion_ids",
        ah: "phone_conversion_number",
        bh: "phone_conversion_options",
        dh: "quantity",
        oe: "redact_device_info",
        eh: "redact_enhanced_user_id",
        Ui: "redact_ga_client_id",
        Vi: "redact_user_id",
        pe: "referral_exclusion_definition",
        Cb: "restricted_data_processing",
        Wi: "retoken",
        fh: "screen_name",
        Mb: "screen_resolution",
        Xi: "search_term",
        Fa: "send_page_view",
        Nb: "send_to",
        gd: "session_duration",
        jf: "session_engaged",
        kf: "session_engaged_time",
        Ob: "session_id",
        lf: "session_number",
        uc: "delivery_postal_code",
        gh: "tc_privacy_string",
        hh: "temporary_client_id",
        Yi: "tracking_id",
        nf: "traffic_type",
        Oa: "transaction_id",
        la: "transport_url",
        ih: "trip_type",
        hd: "update",
        tb: "url_passthrough",
        pf: "_user_agent_architecture",
        qf: "_user_agent_bitness",
        rf: "_user_agent_full_version_list",
        jh: "_user_agent_mobile",
        sf: "_user_agent_model",
        tf: "_user_agent_platform",
        uf: "_user_agent_platform_version",
        vf: "_user_agent_wow64",
        Ga: "user_data",
        kh: "user_data_auto_latency",
        lh: "user_data_auto_meta",
        mh: "user_data_auto_multi",
        nh: "user_data_auto_selectors",
        oh: "user_data_auto_status",
        vc: "user_data_settings",
        Ha: "user_id",
        Ua: "user_properties",
        ph: "us_privacy_string",
        sa: "value",
        qe: "wbraid",
        qh: "wbraid_multiple_conversions",
        sh: "_host_name",
        th: "_in_page_command",
        uh: "_is_linker_valid",
        vh: "_is_passthrough_cid",
        wh: "non_personalized_ads",
      },
    },
    Kg = {},
    Lg = Object.freeze(
      ((Kg[Q.g.ia] = 1),
      (Kg[Q.g.Pc] = 1),
      (Kg[Q.g.Qc] = 1),
      (Kg[Q.g.ja] = 1),
      (Kg[Q.g.pb] = 1),
      (Kg[Q.g.Ra] = 1),
      (Kg[Q.g.qb] = 1),
      (Kg[Q.g.Xc] = 1),
      (Kg[Q.g.Ze] = 1),
      (Kg[Q.g.rb] = 1),
      (Kg[Q.g.Kb] = 1),
      (Kg[Q.g.Zc] = 1),
      (Kg[Q.g.ka] = 1),
      (Kg[Q.g.af] = 1),
      (Kg[Q.g.jc] = 1),
      (Kg[Q.g.ee] = 1),
      (Kg[Q.g.fe] = 1),
      (Kg[Q.g.he] = 1),
      (Kg[Q.g.ed] = 1),
      (Kg[Q.g.Bb] = 1),
      (Kg[Q.g.ke] = 1),
      (Kg[Q.g.me] = 1),
      (Kg[Q.g.ef] = 1),
      (Kg[Q.g.Aa] = 1),
      (Kg[Q.g.pe] = 1),
      (Kg[Q.g.Cb] = 1),
      (Kg[Q.g.Fa] = 1),
      (Kg[Q.g.Nb] = 1),
      (Kg[Q.g.gd] = 1),
      (Kg[Q.g.kf] = 1),
      (Kg[Q.g.uc] = 1),
      (Kg[Q.g.la] = 1),
      (Kg[Q.g.hd] = 1),
      (Kg[Q.g.vc] = 1),
      (Kg[Q.g.Ua] = 1),
      Kg)
    ),
    Mg = Object.freeze([
      Q.g.Ta,
      Q.g.eb,
      Q.g.sc,
      Q.g.Sa,
      Q.g.fh,
      Q.g.Ha,
      Q.g.cf,
      Q.g.Ii,
    ]),
    Ng = {},
    Og = Object.freeze(
      ((Ng[Q.g.xi] = 1),
      (Ng[Q.g.yi] = 1),
      (Ng[Q.g.zi] = 1),
      (Ng[Q.g.Ai] = 1),
      (Ng[Q.g.Bi] = 1),
      (Ng[Q.g.Ci] = 1),
      (Ng[Q.g.Di] = 1),
      (Ng[Q.g.Ei] = 1),
      (Ng[Q.g.Fi] = 1),
      (Ng[Q.g.We] = 1),
      Ng)
    ),
    Pg = {},
    Qg = Object.freeze(
      ((Pg[Q.g.zg] = 1),
      (Pg[Q.g.Ag] = 1),
      (Pg[Q.g.Kc] = 1),
      (Pg[Q.g.Lc] = 1),
      (Pg[Q.g.Bg] = 1),
      (Pg[Q.g.cc] = 1),
      (Pg[Q.g.Mc] = 1),
      (Pg[Q.g.Ib] = 1),
      (Pg[Q.g.fc] = 1),
      (Pg[Q.g.Jb] = 1),
      (Pg[Q.g.La] = 1),
      (Pg[Q.g.Nc] = 1),
      (Pg[Q.g.Qa] = 1),
      (Pg[Q.g.Cg] = 1),
      Pg)
    ),
    Rg = Object.freeze([Q.g.ia, Q.g.Qc, Q.g.Kb]),
    Sg = Object.freeze([].concat(Rg)),
    Tg = Object.freeze([Q.g.Ra, Q.g.fe, Q.g.gd, Q.g.kf, Q.g.de]),
    Ug = Object.freeze([].concat(Tg)),
    Vg = {},
    Wg = ((Vg[Q.g.I] = "1"), (Vg[Q.g.X] = "2"), Vg),
    Xg = {},
    Yg = Object.freeze(
      ((Xg[Q.g.ia] = 1),
      (Xg[Q.g.Pc] = 1),
      (Xg[Q.g.Ea] = 1),
      (Xg[Q.g.nb] = 1),
      (Xg[Q.g.Wd] = 1),
      (Xg[Q.g.Rc] = 1),
      (Xg[Q.g.Sc] = 1),
      (Xg[Q.g.Tc] = 1),
      (Xg[Q.g.ja] = 1),
      (Xg[Q.g.Uc] = 1),
      (Xg[Q.g.Na] = 1),
      (Xg[Q.g.za] = 1),
      (Xg[Q.g.pb] = 1),
      (Xg[Q.g.Ra] = 1),
      (Xg[Q.g.qb] = 1),
      (Xg[Q.g.rb] = 1),
      (Xg[Q.g.xa] = 1),
      (Xg[Q.g.Yc] = 1),
      (Xg[Q.g.ka] = 1),
      (Xg[Q.g.Eg] = 1),
      (Xg[Q.g.cd] = 1),
      (Xg[Q.g.dd] = 1),
      (Xg[Q.g.cf] = 1),
      (Xg[Q.g.he] = 1),
      (Xg[Q.g.Sa] = 1),
      (Xg[Q.g.qc] = 1),
      (Xg[Q.g.Ta] = 1),
      (Xg[Q.g.eb] = 1),
      (Xg[Q.g.Yg] = 1),
      (Xg[Q.g.Zg] = 1),
      (Xg[Q.g.ah] = 1),
      (Xg[Q.g.bh] = 1),
      (Xg[Q.g.Cb] = 1),
      (Xg[Q.g.Fa] = 1),
      (Xg[Q.g.Nb] = 1),
      (Xg[Q.g.uc] = 1),
      (Xg[Q.g.Oa] = 1),
      (Xg[Q.g.la] = 1),
      (Xg[Q.g.hd] = 1),
      (Xg[Q.g.tb] = 1),
      (Xg[Q.g.Ga] = 1),
      (Xg[Q.g.Ha] = 1),
      (Xg[Q.g.sa] = 1),
      Xg)
    );
  Object.freeze(Q.g);
  var Zg = {},
    $g = (m.google_tag_manager = m.google_tag_manager || {}),
    ah = Math.random();
  Zg.we = "8v0";
  Zg.na = "dataLayer";
  Zg.wi =
    "ChEI8LzWmAYQrPOy1ZmyuIeWARIlACANOT7cHHmyaXVBHqabhLDYnfVEkOTgZDtIPAtdLzBcUpaPPRoC6ug\x3d";
  var bh = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    ch = { __paused: !0, __tg: !0 },
    dh;
  for (dh in bh) bh.hasOwnProperty(dh) && (ch[dh] = !0);
  Zg.Jc = "www.googletagmanager.com";
  var eh,
    fh = Zg.Jc + "/gtm.js";
  fh = Zg.Jc + "/gtag/js";
  eh = fh;
  var gh = Oa(""),
    hh = Oa("true"),
    ih = null,
    jh = null,
    kh = {},
    lh = {},
    mh = function () {
      var a = $g.sequence || 1;
      $g.sequence = a + 1;
      return a;
    };
  Zg.vi = "true";
  var nh = "";
  Zg.xe = nh;
  var oh = new Ja(),
    ph = {},
    qh = {},
    th = {
      name: Zg.na,
      set: function (a, b) {
        K(ab(a, b), ph);
        rh();
      },
      get: function (a) {
        return sh(a, 2);
      },
      reset: function () {
        oh = new Ja();
        ph = {};
        rh();
      },
    },
    sh = function (a, b) {
      return 2 != b ? oh.get(a) : uh(a);
    },
    uh = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = ph, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    vh = function (a, b) {
      qh.hasOwnProperty(a) || (oh.set(a, b), K(ab(a, b), ph), rh());
    },
    wh = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = sh(c, 1);
        if (Da(d) || pc(d)) d = K(d);
        qh[c] = d;
      }
    },
    rh = function (a) {
      La(qh, function (b, c) {
        oh.set(b, c);
        K(ab(b), ph);
        K(ab(b, c), ph);
        a && delete qh[b];
      });
    },
    xh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? uh(a) : oh.get(a);
      "array" === mc(d) || "object" === mc(d) ? (c = K(d)) : (c = d);
      return c;
    };
  var yh,
    zh = !1;
  function Ah() {
    zh = !0;
    yh = yh || {};
  }
  var Bh = function (a) {
    zh || Ah();
    return yh[a];
  };
  var Ch = function () {
      var a = m.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Dh = function (a) {
      if (H.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
        return !0;
      var c = m.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = m.getComputedStyle(d, null));
      }
      return !1;
    };
  var Nh = function () {
      var a = H.body,
        b = H.documentElement || (a && a.parentElement),
        c,
        d;
      if (H.compatMode && "BackCompat" !== H.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        N(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    Oh = function (a) {
      var b = Nh(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var Ph = [],
    Qh = !(!m.IntersectionObserver || !m.IntersectionObserverEntry),
    Rh = function (a, b, c) {
      for (
        var d = new m.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < Ph.length; f++) if (!Ph[f]) return (Ph[f] = d), f;
      return Ph.push(d) - 1;
    },
    Sh = function (a, b, c) {
      function d(h, l) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: h.getBoundingClientRect(),
            intersectionRatio: l,
            intersectionRect: n,
            isIntersecting: 0 < l,
            rootBounds: n,
            target: h,
            time: Sa(),
          };
        I(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (h, l) {
        return h - l;
      });
      return function () {
        for (var h = 0; h < b.length; h++) {
          var l = Oh(b[h]);
          if (l > e[h])
            for (; f[h] < c.length - 1 && l >= c[f[h] + 1]; )
              d(b[h], l), f[h]++;
          else if (l < e[h])
            for (; 0 <= f[h] && l <= c[f[h]]; ) d(b[h], l), f[h]--;
          e[h] = l;
        }
      };
    },
    Th = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (Qh) {
        var e = !1;
        I(function () {
          e || Sh(a, b, c)();
        });
        return Rh(
          function (f) {
            e = !0;
            for (var g = { Ec: 0 }; g.Ec < f.length; g = { Ec: g.Ec }, g.Ec++)
              I(
                (function (h) {
                  return function () {
                    return a(f[h.Ec]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return m.setInterval(Sh(a, b, c), 1e3);
    },
    Uh = function (a) {
      Qh
        ? 0 <= a &&
          a < Ph.length &&
          Ph[a] &&
          (Ph[a].disconnect(), (Ph[a] = void 0))
        : m.clearInterval(a);
    };
  var Vh = /:[0-9]+$/,
    Wh = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var l = h.slice(1).join("=");
          if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
          e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    Zh = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Xh(a.protocol) || Xh(m.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(Vh, "")
            .toLowerCase());
      return Yh(a, b, c, d, e);
    },
    Yh = function (a, b, c, d, e) {
      var f,
        g = Xh(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = $h(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Vh, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || jg("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Wh(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Xh = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    $h = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    ai = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || jg("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Vh, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    bi = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = ai(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var l = "" + f + g + h;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var ci = {};
  var ei = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { Ya: a.Ya, tagName: d.tagName, type: 1 };
        b && (e.querySelector = di(d));
        c && (e.isVisible = !Dh(d));
        return e;
      }
    },
    hi = function (a) {
      if (0 != a.length) {
        var b;
        b = fi(a, function (c) {
          return !gi.test(c.Ya);
        });
        b = fi(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = fi(b, function (c) {
          return !Dh(c.element);
        });
        return b[0];
      }
    },
    fi = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    di = function (a) {
      var b;
      if (a === H.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = di(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    ii = !0,
    ji = !1;
  ci.ri = "true";
  var ki = function (a) {
      if ("false" === ci.ri || !ii) return !1;
      if (ji) return !0;
      var b = Bh("AW-" + a);
      return !!b && !!b.preAutoPii;
    },
    li = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    mi = /@(gmail|googlemail)\./i,
    gi = /support|noreply/i,
    ni = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    oi = ["BR"],
    pi = {},
    qi = function (a) {
      a = a || { Ub: !0, Vb: !0 };
      a.Gb = a.Gb || { email: !0, phone: !0, address: !0 };
      var b,
        c = a,
        d = !!c.Ub + "." + !!c.Vb;
      c && c.sd && c.sd.length && (d += "." + c.sd.join("."));
      c &&
        c.Gb &&
        (d += "." + c.Gb.email + "." + c.Gb.phone + "." + c.Gb.address);
      b = d;
      var e = pi[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = H.body;
      if (h) {
        for (
          var l = h.querySelectorAll("*"), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (
            !(0 <= ni.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= oi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < l.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var u = f,
        t = u.status,
        v = [],
        w;
      if (a.Gb && a.Gb.email) {
        for (var x = u.elements, y = [], A = 0; A < x.length; A++) {
          var B = x[A],
            C = B.textContent;
          "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var D = C.match(li);
            if (D) {
              var G = D[0],
                E;
              if (m.location) {
                var J = Yh(m.location, "host", !0);
                E = 0 <= G.toLowerCase().indexOf(J);
              } else E = !1;
              E || y.push({ element: B, Ya: G });
            }
          }
        }
        var P = a && a.sd;
        if (P && 0 !== P.length) {
          for (var Y = [], ja = 0; ja < y.length; ja++) {
            for (var U = !0, O = 0; O < P.length; O++) {
              var ea = P[O];
              if (ea && eg(y[ja].element, ea)) {
                U = !1;
                break;
              }
            }
            U && Y.push(y[ja]);
          }
          v = Y;
        } else v = y;
        w = hi(v);
        10 < y.length && (t = "3");
      }
      var W = [];
      !a.fi && w && (v = [w]);
      for (var S = 0; S < v.length; S++) W.push(ei(v[S], a.Ub, a.Vb));
      var Fa = { elements: W.slice(0, 10), Xh: ei(w, a.Ub, a.Vb), status: t };
      pi[b] = { timestamp: Sa(), result: Fa };
      return Fa;
    },
    ri = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Ya.length + ":" + mi.test(a.Ya)
      );
    };
  var si = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var l = g[h].trim();
            if (l) {
              if (0 === l.indexOf("dataLayer.")) f = sh(l.substring(10));
              else {
                var n = l.split(".");
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && cg) {
          var q = dg(e);
          if (q && 0 < q.length) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < ("email" === b || "phone_number" === b ? 5 : 1);
              r++
            )
              f.push(Wb(q[r]) || Qa(q[r].value));
            f = 1 === f.length ? f[0] : f;
          }
        }
        f && (a[b] = f);
      }
    },
    ti = function (a) {
      if (a) {
        var b = {};
        si(b, "email", a.email);
        si(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          si(e, "first_name", c[d].first_name);
          si(e, "last_name", c[d].last_name);
          si(e, "street", c[d].street);
          si(e, "city", c[d].city);
          si(e, "region", c[d].region);
          si(e, "country", c[d].country);
          si(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    ui = function (a) {
      var b = a.fa[Q.g.vc];
      return b
        ? "auto_detect" === b.mode ||
            "selectors" === b.mode ||
            "code" === b.mode
        : !1;
    },
    vi = function (a) {
      if (a) {
        if ("selectors" === a.mode || pc(a.selectors)) return ti(a.selectors);
        if ("auto_detect" === a.mode || pc(a.auto_detect)) {
          var b;
          var c = a.auto_detect;
          if (c) {
            var d = qi({
                Ub: !1,
                Vb: !1,
                sd: c.exclude_element_selectors,
                Gb: {
                  email: !!c.email,
                  phone: !!c.phone,
                  address: !!c.address,
                },
              }).elements,
              e = {};
            if (0 < d.length)
              for (var f = 0; f < d.length; f++) {
                var g = d[f];
                if (1 === g.type) {
                  e.email = g.Ya;
                  break;
                }
              }
            b = e;
          } else b = void 0;
          return b;
        }
      }
    };
  var Di = {},
    Ei = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === Di[a] && (Di[a] = Math.floor(Math.random() * b));
      return Di[a];
    };
  var Gi = { Hf: "US", bi: "US-IL" };
  var Hi = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Ii = function (a) {
    Ii[" "](a);
    return a;
  };
  Ii[" "] = function () {};
  var Ki = function () {
    var a = Ji,
      b = "Pf";
    if (a.Pf && a.hasOwnProperty(b)) return a.Pf;
    var c = new a();
    return (a.Pf = c);
  };
  var Ji = function () {
    var a = {};
    this.h = function () {
      var b = Hi.h,
        c = Hi.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[Hi.h] = !0;
    };
  };
  var Li = [];
  function Mi() {
    var a = Kb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Ni,
        update: Oi,
        addListener: Pi,
        notifyListeners: Qi,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Ni(a, b, c, d, e, f) {
    var g = Mi();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        l = h[a] || {},
        n = l.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) h[a] = r;
        q &&
          m.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Ri(a), Qi(), jg("TAGGING", 2));
          }, f);
      }
    }
  }
  function Oi(a, b) {
    var c = Mi();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Si(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Si(c, a);
      f.quiet ? ((f.quiet = !1), Ri(a)) : g !== d && Ri(a);
    }
  }
  function Pi(a, b) {
    Li.push({ Ff: a, Fj: b });
  }
  function Ri(a) {
    for (var b = 0; b < Li.length; ++b) {
      var c = Li[b];
      Da(c.Ff) && -1 !== c.Ff.indexOf(a) && (c.Yh = !0);
    }
  }
  function Qi(a, b) {
    for (var c = 0; c < Li.length; ++c) {
      var d = Li[c];
      if (d.Yh) {
        d.Yh = !1;
        try {
          d.Fj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Si(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Ti = function (a) {
      var b = Mi();
      b.accessedAny = !0;
      return Si(b, a);
    },
    Ui = function (a) {
      var b = Mi();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Vi = function (a) {
      var b = Mi();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Wi = function () {
      if (!Ki().h()) return !1;
      var a = Mi();
      a.accessedAny = !0;
      return a.active;
    },
    Xi = function () {
      var a = Mi();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Yi = function (a, b) {
      Mi().addListener(a, b);
    },
    Zi = function (a, b) {
      Mi().notifyListeners(a, b);
    },
    $i = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Vi(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Yi(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    aj = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === Ti(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Yi(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ff = g), a(f));
        });
    };
  function bj() {}
  function cj() {}
  function dj(a) {
    for (var b = [], c = 0; c < ej.length; c++) {
      var d = a(ej[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var ej = [Q.g.I, Q.g.X],
    fj = function (a) {
      var b = a[Q.g.Ue];
      b && N(40);
      var c = a[Q.g.rg];
      c && N(41);
      for (
        var d = Da(b) ? b : [b], e = { Fc: 0 };
        e.Fc < d.length;
        e = { Fc: e.Fc }, ++e.Fc
      )
        La(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.g.Ue && g !== Q.g.rg) {
                var l = d[f.Fc],
                  n = Gi.Hf,
                  p = Gi.bi;
                Mi().set(g, h, l, n, p, c);
              }
            };
          })(e)
        );
    },
    gj = 0,
    hj = function (a, b) {
      La(a, function (e, f) {
        Mi().update(e, f);
      });
      Zi(b.eventId, b.priorityId);
      var c = Sa(),
        d = c - gj;
      gj && 0 <= d && 1e3 > d && N(66);
      gj = c;
    },
    ij = function (a) {
      var b = Ti(a);
      return void 0 != b ? b : !0;
    },
    jj = function () {
      return "G1" + dj(Ti);
    },
    kj = function (a, b) {
      Yi(a, b);
    },
    lj = function (a, b) {
      aj(a, b);
    },
    mj = function (a, b) {
      $i(a, b);
    };
  var nj = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var oj = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var pj = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    qj = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function rj(a) {
    return "null" !== a.origin;
  }
  var uj = function (a, b, c, d) {
      return sj(d) ? oj(a, String(b || tj()), c) : [];
    },
    xj = function (a, b, c, d, e) {
      if (sj(e)) {
        var f = vj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = wj(
            f,
            function (g) {
              return g.Fe;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = wj(
            f,
            function (g) {
              return g.Fd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function yj(a, b, c, d) {
    var e = tj(),
      f = window;
    rj(f) && (f.document.cookie = a);
    var g = tj();
    return e != g || (void 0 != c && 0 <= uj(b, g, !1, d).indexOf(c));
  }
  var Cj = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!sj(c.jb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = zj(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      g = e(g, "expires", l);
      g = e(g, "max-age", c.jk);
      g = e(g, "samesite", c.Ek);
      c.Gk && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Aj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
          var t = "none" !== p[u] ? p[u] : void 0,
            v = e(g, "domain", t);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Bj(t, c.path) && yj(v, a, b, c.jb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Bj(n, c.path) ? 1 : yj(g, a, b, c.jb) ? 0 : 1;
    },
    Dj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Cj(a, b, c);
    };
  function wj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        l = b(h);
      l === c
        ? d.push(h)
        : void 0 === f || l < f
        ? ((e = [h]), (f = l))
        : l === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function vj(a, b, c) {
    for (var d = [], e = uj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: g.join("."), Fe: 1 * l[0] || 1, Fd: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var zj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Ej = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Fj = /(^|\.)doubleclick\.net$/i,
    Bj = function (a, b) {
      return (
        Fj.test(window.document.location.hostname) || ("/" === b && Ej.test(a))
      );
    },
    tj = function () {
      return rj(window) ? window.document.cookie : "";
    },
    Aj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Fj.test(e) || Ej.test(e) || a.push("none");
      return a;
    },
    sj = function (a) {
      if (!Ki().h() || !a || !Wi()) return !0;
      if (!Vi(a)) return !1;
      var b = Ti(a);
      return null == b ? !0 : !!b;
    };
  var Gj = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (nj(a) & 2147483647)) : String(b);
    },
    Hj = function (a) {
      return [Gj(a), Math.round(Sa() / 1e3)].join(".");
    },
    Kj = function (a, b, c, d, e) {
      var f = Ij(b);
      return xj(a, f, Jj(c), d, e);
    },
    Lj = function (a, b, c, d) {
      var e = "" + Ij(c),
        f = Jj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Ij = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Jj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Mj = function () {
    $g.dedupe_gclid || ($g.dedupe_gclid = "" + Hj());
    return $g.dedupe_gclid;
  };
  var Nj = function () {
    var a = !1;
    return a;
  };
  var Le = { P: "G-62P3FH3XKV", Ic: "93168769" },
    Oj = { Vh: "G-62P3FH3XKV|GT-55XF68X", Wh: "G-62P3FH3XKV" },
    Pj = function () {
      return Oj.Vh ? Oj.Vh.split("|") : [Le.P];
    },
    Qj = function () {
      if (Oj.Wh) return Oj.Wh.split("|");
      N(84);
      return [];
    },
    Rj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Tj = function () {
      for (var a = Sj(), b = Pj(), c = 0; c < b.length; c++)
        a.container[b[c]] = 2;
      for (var d = Qj(), e = 0; e < d.length; e++)
        a.destination[d[e]] && 0 === a.destination[d[e]].state && N(93),
          (a.destination[d[e]] = { state: 2, transportUrl: void 0 });
      a.canonical[Le.Ic] = 2;
    },
    Uj = function (a) {
      return Sj().container.hasOwnProperty(a);
    },
    Vj = function () {
      var a = Sj().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b]) return !0;
      return !1;
    },
    Wj = function () {
      var a = {};
      La(Sj().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function Sj() {
    var a = $g.tidr;
    a || ((a = new Rj()), ($g.tidr = a));
    return a;
  }
  var Xj;
  if (3 === Zg.we.length) Xj = "g";
  else {
    var Yj = "G";
    Yj = "g";
    Xj = Yj;
  }
  var Zj = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: Xj,
      OPT: "o",
    },
    ak = function (a) {
      var b = Le.P.split("-"),
        c = b[0].toUpperCase(),
        d = Zj[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Zg.we.length) {
        var g = "w";
        g = Nj() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Zg.we + e;
    };
  function bk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var ck = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function dk() {
    return vb("iPhone") && !vb("iPod") && !vb("iPad");
  }
  function ek() {
    dk() || vb("iPad") || vb("iPod");
  }
  vb("Opera");
  vb("Trident") || vb("MSIE");
  vb("Edge");
  !vb("Gecko") ||
    (-1 != ub().toLowerCase().indexOf("webkit") && !vb("Edge")) ||
    vb("Trident") ||
    vb("MSIE") ||
    vb("Edge");
  -1 != ub().toLowerCase().indexOf("webkit") && !vb("Edge") && vb("Mobile");
  vb("Macintosh");
  vb("Windows");
  vb("Linux") || vb("CrOS");
  var fk = na.navigator || null;
  fk && (fk.appVersion || "").indexOf("X11");
  vb("Android");
  dk();
  vb("iPad");
  vb("iPod");
  ek();
  ub().toLowerCase().indexOf("kaios");
  var gk = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    hk = /#|$/,
    ik = function (a, b) {
      var c = a.search(hk),
        d = gk(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    jk = /[?&]($|#)/,
    kk = function (a, b, c) {
      for (
        var d, e = a.search(hk), f = 0, g, h = [];
        0 <= (g = gk(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(jk, "$1");
      var l,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var u = d.indexOf("?"),
          t;
        0 > u || u > r ? ((u = r), (t = "")) : (t = d.substring(u + 1, r));
        q = [d.slice(0, u), t, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        l = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else l = d;
      return l;
    };
  function lk(a) {
    if (!a || !H.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var mk = function () {
    var a = m;
    if (a.top == a) return 0;
    var b = a.location.ancestorOrigins;
    if (b) return b[b.length - 1] == a.location.origin ? 1 : 2;
    var c;
    var d = a.top;
    try {
      var e;
      if ((e = !!d && null != d.location.href))
        b: {
          try {
            Ii(d.foo);
            e = !0;
            break b;
          } catch (f) {}
          e = !1;
        }
      c = e;
    } catch (f) {
      c = !1;
    }
    return c ? 1 : 2;
  };
  var nk = function () {};
  var ok = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    pk = function (a, b, c) {
      this.s = a;
      this.h = null;
      this.K = {};
      this.ab = 0;
      this.aa = void 0 === b ? 500 : b;
      this.H = void 0 === c ? !1 : c;
      this.D = null;
    };
  ma(pk, nk);
  pk.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.H },
      d = qj(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.aa &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.aa));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = ok(c)),
          (c.internalBlockOnErrors = b.H),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      qk(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  pk.prototype.removeEventListener = function (a) {
    a && a.listenerId && qk(this, "removeEventListener", null, a.listenerId);
  };
  var sk = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var l;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = rk(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && rk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === h
            ? a.purpose && a.vendor
              ? rk(a.purpose.legitimateInterests, b) &&
                rk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    rk = function (a, b) {
      return !(!a || !a[b]);
    },
    qk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (tk(a)) {
        uk(a);
        var f = ++a.ab;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    tk = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    uk = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        ck(a.s, a.D));
    };
  var vk = !0;
  vk = !1;
  var wk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    xk = bk("", 550),
    yk = bk("", 500);
  function zk() {
    var a = $g.tcf || {};
    return ($g.tcf = a);
  }
  var Ek = function () {
    var a = zk(),
      b = new pk(m, vk ? 3e3 : -1);
    if (
      !0 === m.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof m.__tcfapi ||
        "function" === typeof b.s.__tcfapi ||
        null != tk(b))
    ) {
      a.active = !0;
      a.Id = {};
      Ak();
      var c = null;
      vk
        ? (c = m.setTimeout(function () {
            Bk(a);
            Ck(a);
            c = null;
          }, yk))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Bk(a), Ck(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Dk()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in wk)
                if (wk.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      l = !0;
                    l = void 0 === l ? !1 : l;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = ok(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === h.gdprApplies ||
                        "tcunavailable" === h.tcString ||
                        (void 0 === h.gdprApplies && !l) ||
                        "string" !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : sk(h, "1", 0)
                      : !1;
                  } else f[g] = sk(d, g, wk[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Id = e), Ck(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Bk(a), Ck(a);
      }
    }
  };
  function Bk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    vk && (a.Id = Dk());
  }
  function Ak() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = xk), a);
    fj(b);
  }
  function Dk() {
    var a = {},
      b;
    for (b in wk) wk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Ck(a) {
    var b = {},
      c = ((b.ad_storage = a.Id["1"] ? "granted" : "denied"), b);
    hj(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Fk() }
    );
  }
  var Fk = function () {
      var a = zk();
      return a.active ? a.tcString || "" : "";
    },
    Gk = function () {
      var a = zk();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Hk = function (a) {
      if (!wk.hasOwnProperty(String(a))) return !0;
      var b = zk();
      return b.active && b.Id ? !!b.Id[String(a)] : !0;
    };
  function Ik(a, b, c, d) {
    var e,
      f = Number(null != a.ib ? a.ib : void 0);
    0 !== f && (e = new Date((b || Sa()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      jb: d,
    };
  }
  var Jk = ["1"],
    Kk = {},
    Lk = {},
    Nk = function (a) {
      return Kk[Mk(a)];
    },
    Qk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Mk(a.prefix);
      if (!Kk[c] && !Ok(c, a.path, a.domain) && b) {
        var d = Mk(a.prefix),
          e = Hj();
        if (0 === Pk(d, e, a)) {
          var f = Kb("google_tag_data", {});
          f._gcl_au ? jg("GTM", 57) : (f._gcl_au = e);
        }
        Ok(c, a.path, a.domain);
      }
    };
  function Pk(a, b, c, d) {
    var e = Lj(b, "1", c.domain, c.path),
      f = Ik(c, d);
    f.jb = "ad_storage";
    return Dj(a, e, f);
  }
  function Ok(a, b, c) {
    var d = Kj(a, b, c, Jk, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((Kk[a] = e.slice(0, 2).join(".")),
        (Lk[a] = { id: e.slice(2, 4).join("."), Th: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Lk[a] = { id: e.slice(0, 2).join("."), Th: Number(e[2]) || 0 })
      : (Kk[a] = d);
    return !0;
  }
  function Mk(a) {
    return (a || "_gcl") + "_au";
  }
  function Rk() {
    for (var a = Sk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Tk() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Sk, Uk;
  function Vk(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Uk[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    Sk = Sk || Tk();
    Uk = Uk || Rk();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var Wk;
  var $k = function () {
      var a = Xk,
        b = Yk,
        c = Zk(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Tb(H, "mousedown", d);
        Tb(H, "keyup", d);
        Tb(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    al = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Zk().decorators.push(f);
    },
    bl = function (a, b, c) {
      for (var d = Zk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== H.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Va(e, g.callback());
        }
      }
      return e;
    };
  function Zk() {
    var a = Kb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var cl = /(.*?)\*(.*?)\*(.*)/,
    dl = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    el = /^(?:www\.|m\.|amp\.)+/,
    fl = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function gl(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var il = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          Sk = Sk || Tk();
          Uk = Uk || Rk();
          for (var l = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              u = p ? h.charCodeAt(n + 1) : 0,
              t = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              w = ((r & 3) << 4) | (u >> 4),
              x = ((u & 15) << 2) | (t >> 6),
              y = t & 63;
            q || ((y = 64), p || (x = 64));
            l.push(Sk[v], Sk[w], Sk[x], Sk[y]);
          }
          g = l.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", hl(A), A].join("*");
  };
  function hl(a, b) {
    var c = [
        m.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Ib.userLanguage || Ib.language,
        Math.floor(Sa() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Wk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Wk = d;
    for (var l = 4294967295, n = 0; n < c.length; n++)
      l = (l >>> 8) ^ Wk[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }
  function jl() {
    return function (a) {
      var b = ai(m.location.href),
        c = b.search.replace("?", ""),
        d = Wh(c, "_gl", !1, !0) || "";
      a.query = kl(d) || {};
      var e = Zh(b, "fragment").match(gl("_gl"));
      a.fragment = kl((e && e[3]) || "") || {};
    };
  }
  function ll(a, b) {
    var c = gl(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var ml = function (a, b) {
      b || (b = "_gl");
      var c = fl.exec(a);
      if (!c) return "";
      var d = c[1],
        e = ll(b, (c[2] || "").slice(1)),
        f = ll(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    nl = function (a) {
      var b = jl(),
        c = Zk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Va(d, e.query), a && Va(d, e.fragment));
      return d;
    },
    kl = function (a) {
      try {
        var b = ol(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Vk(d[e + 1]);
            c[f] = g;
          }
          jg("TAGGING", 6);
          return c;
        }
      } catch (h) {
        jg("TAGGING", 8);
      }
    };
  function ol(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = cl.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          l;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === hl(h, p)) {
              l = !0;
              break a;
            }
          l = !1;
        }
        if (l) return h;
        jg("TAGGING", 7);
      }
    }
  }
  function pl(a, b, c, d) {
    function e(p) {
      p = ll(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = fl.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + l;
  }
  function ql(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = bl(b, 1, c),
      e = bl(b, 2, c),
      f = bl(b, 3, c);
    if (Wa(d)) {
      var g = il(d);
      c ? rl("_gl", g, a) : sl("_gl", g, a, !1);
    }
    if (!c && Wa(e)) {
      var h = il(e);
      sl("_gl", h, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              sl(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              rl(n, p, q);
              break a;
            }
          }
          "string" == typeof q && pl(n, p, q);
        }
  }
  function sl(a, b, c, d) {
    if (c.href) {
      var e = pl(a, b, c.href, void 0 === d ? !1 : d);
      tb.test(e) && (c.href = e);
    }
  }
  function rl(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = H.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = pl(a, b, c.action);
        tb.test(n) && (c.action = n);
      }
    }
  }
  function Xk(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || ql(e, e.hostname);
      }
    } catch (g) {}
  }
  function Yk(a) {
    try {
      if (a.action) {
        var b = Zh(ai(a.action), "host");
        ql(a, b);
      }
    } catch (c) {}
  }
  var tl = function (a, b, c, d) {
      $k();
      al(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Kl = function (a, b) {
      $k();
      al(a, [Yh(m.location, "host", !0)], b, !0, !0);
    },
    Ll = function () {
      var a = H.location.hostname,
        b = dl.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(el, ""),
        l = e.replace(el, ""),
        n;
      if (!(n = h === l)) {
        var p = "." + l;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Ml = function (a, b) {
      return !1 === a ? !1 : a || b || Ll();
    };
  var Nl = {};
  var Ol = function (a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          ng: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function Pl(a, b) {
    var c = Ol(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].ng] || (d[c[e].ng] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ma: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].ng].push(g);
      }
    }
    return d;
  }
  var Ql = /^\w+$/,
    Rl = /^[\w-]+$/,
    Sl = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Tl = function () {
      if (!Ki().h() || !Wi()) return !0;
      var a = Ti("ad_storage");
      return null == a ? !0 : !!a;
    },
    Ul = function (a, b) {
      Vi("ad_storage")
        ? Tl()
          ? a()
          : aj(a, "ad_storage")
        : b
        ? jg("TAGGING", 3)
        : $i(
            function () {
              Ul(a, !0);
            },
            ["ad_storage"]
          );
    },
    Wl = function (a) {
      return Vl(a).map(function (b) {
        return b.ma;
      });
    },
    Vl = function (a) {
      var b = [];
      if (!rj(m) || !H.cookie) return b;
      var c = uj(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Qd: d.Qd }, e++) {
        var f = Xl(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Qd = g.ma;
          var l = g.timestamp,
            n = g.labels,
            p = Ga(
              b,
              (function (q) {
                return function (r) {
                  return r.ma === q.Qd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = Yl(p.labels, n || [])))
            : b.push({ version: h, ma: d.Qd, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Zl(b);
    };
  function Yl(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function $l(a) {
    return a && "string" == typeof a && a.match(Ql) ? a : "_gcl";
  }
  var bm = function () {
      var a = ai(m.location.href),
        b = Zh(a, "query", !1, void 0, "gclid"),
        c = Zh(a, "query", !1, void 0, "gclsrc"),
        d = Zh(a, "query", !1, void 0, "wbraid"),
        e = Zh(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Wh(f, "gclid", !1);
        c = c || Wh(f, "gclsrc", !1);
        d = d || Wh(f, "wbraid", !1);
      }
      return am(b, c, e, d);
    },
    am = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Rl.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Rl))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    dm = function (a) {
      var b = bm();
      Ul(function () {
        cm(b, !1, a);
      });
    };
  function cm(a, b, c, d, e) {
    function f(w, x) {
      var y = em(w, g);
      y && (Dj(y, x, h), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = $l(c.prefix);
    d = d || Sa();
    var h = Ik(c, d, !0);
    h.jb = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Nl.enable_gbraid_cookie_write
        ? 0
        : Nl.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = em("gb", g),
        u = !1;
      if (!b)
        for (var t = Vl(r), v = 0; v < t.length; v++)
          t[v].ma === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var gm = function (a, b) {
      var c = nl(!0);
      Ul(function () {
        for (var d = $l(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Sl[f]) {
            var g = em(f, d),
              h = c[g];
            if (h) {
              var l = Math.min(fm(h), Sa()),
                n;
              b: {
                var p = l;
                if (rj(m))
                  for (
                    var q = uj(g, H.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (fm(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Ik(b, l, !0);
                u.jb = "ad_storage";
                Dj(g, h, u);
              }
            }
          }
        }
        cm(am(c.gclid, c.gclsrc), !1, b);
      });
    },
    em = function (a, b) {
      var c = Sl[a];
      if (void 0 !== c) return b + c;
    },
    fm = function (a) {
      return 0 !== hm(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Xl(a) {
    var b = hm(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ma: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function hm(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Rl.test(a[2])
      ? []
      : a;
  }
  var im = function (a, b, c, d, e) {
      if (Da(b) && rj(m)) {
        var f = $l(e),
          g = function () {
            for (var h = {}, l = 0; l < a.length; ++l) {
              var n = em(a[l], f);
              if (n) {
                var p = uj(n, H.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        Ul(function () {
          tl(g, b, c, d);
        });
      }
    },
    Zl = function (a) {
      return a.filter(function (b) {
        return Rl.test(b.ma);
      });
    },
    jm = function (a, b) {
      if (rj(m)) {
        for (var c = $l(b.prefix), d = {}, e = 0; e < a.length; e++)
          Sl[a[e]] && (d[a[e]] = Sl[a[e]]);
        Ul(function () {
          La(d, function (f, g) {
            var h = uj(c + g, H.cookie, void 0, "ad_storage");
            h.sort(function (u, t) {
              return fm(t) - fm(u);
            });
            if (h.length) {
              var l = h[0],
                n = fm(l),
                p = 0 !== hm(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== hm(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              cm(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function km(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var lm = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Wi()) {
        var c = bm();
        if (km(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Kl(function () {
            return d;
          }, 3);
          Kl(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    mm = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Tl()) return e;
      var f = Vl(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          l = f[0].timestamp,
          n = [h.version, Math.round(l / 1e3), h.ma]
            .concat(h.labels || [], [b])
            .join("."),
          p = Ik(c, l, !0);
        p.jb = "ad_storage";
        Dj(a, n, p);
      }
      return e;
    };
  function nm(a, b) {
    var c = $l(b),
      d = em(a, c);
    if (!d) return 0;
    for (var e = Vl(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function om(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var pm = function (a) {
    var b = Math.max(nm("aw", a), om(Tl() ? Pl() : {}));
    return Math.max(nm("gb", a), om(Tl() ? Pl("_gac_gb", !0) : {})) > b;
  };
  var um = /[A-Z]+/,
    vm = /\s/,
    wm = function (a) {
      if (k(a)) {
        a = Qa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (um.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (vm.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, U: c + "-" + d[0], J: d };
          }
        }
      }
    },
    ym = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = wm(a[c]);
        d && (b[d.id] = d);
      }
      xm(b);
      var e = [];
      La(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function xm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.J[1] && b.push(d.U);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Am = function (a, b, c, d) {
      return (2 === zm() || d || "http:" != m.location.protocol ? a : b) + c;
    },
    zm = function () {
      var a = Qb(),
        b;
      if (1 === a)
        a: {
          var c = eh;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = H.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var l = g[h].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Mm = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.B = c;
      this.C = {};
      this.metadata = K(c.eventMetadata || {});
      this.R = !1;
    },
    Nm = function (a, b, c) {
      var d = R(a.B, b);
      void 0 !== d ? (a.C[b] = d) : void 0 !== c && (a.C[b] = c);
    },
    Om = function (a, b, c) {
      var d = Bh(a.target.U);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Pm(a) {
    return {
      getDestinationId: function () {
        return a.target.U;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.C[b];
      },
      setHitData: function (b, c) {
        return void (a.C[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.C[b] && (a.C[b] = c);
      },
      copyToHitData: function (b, c) {
        Nm(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.R = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Rm = function (a) {
      var b = Qm[a.target.U];
      if (!a.R && b)
        for (var c = Pm(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.R = !0;
          }
          if (a.R) break;
        }
    },
    Sm = function (a, b) {
      var c = Qm[a];
      c || (c = Qm[a] = []);
      c.push(b);
    },
    Qm = {};
  var on = function (a) {
      var b = !1;
      if (!mn || !nn[mn]) return !1;
      b = a || "C" in nn[mn];
      return b;
    },
    rn = function (a, b) {
      var c;
      if (!mn || !on(b)) return "";
      var d = nn[mn];
      c =
        "&al=" +
        pn
          .filter(function (e) {
            return void 0 !== d[e];
          })
          .map(function (e) {
            return e + Math.floor(d[e]);
          })
          .join(".") +
        (".Z" + qn[mn]);
      a && delete nn[mn];
      return c;
    },
    un = function (a) {},
    yn = function (a) {},
    zn = function () {
      return (
        "&tc=" +
        ke.filter(function (a) {
          return a;
        }).length
      );
    },
    Cn = function () {
      2022 <= An().length && Bn();
    },
    Dn = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    Fn = function () {
      En || (En = m.setTimeout(Bn, 500));
    },
    Bn = function (a) {
      En && (m.clearTimeout(En), (En = void 0));
      if (void 0 !== mn && (!Gn[mn] || Hn || In || on(a)))
        if (void 0 === qn[mn] && (Jn[mn] || Kn.Zj() || 0 >= Ln--))
          N(1), (Jn[mn] = !0);
        else {
          void 0 === qn[mn] && Kn.zk();
          var b = An(!0, a);
          a ? Zb(b) : Sb(b);
          if (Mn || (Nn && 0 < On.length)) {
            var c = b.replace("/a?", "/td?");
            Sb(c);
          }
          Gn[mn] = !0;
          Nn = Mn = Pn = Qn = In = Hn = "";
          On = [];
        }
    },
    An = function (a, b) {
      var c = mn;
      if (void 0 === c) return "";
      var d = lg("GTM"),
        e = lg("TAGGING"),
        f = Rn,
        g = Gn[c] ? "" : "&es=1",
        h = Sn[c],
        l = un(c),
        n = zn(),
        p = Hn,
        q = In,
        r = Qn,
        u = yn(a),
        t = Pn,
        v = Mn,
        w = rn(a, b),
        x;
      return [
        f,
        g,
        h,
        l,
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        n,
        p,
        q,
        r,
        u,
        t,
        v,
        w,
        x,
        Nn ? "&dl=" + encodeURIComponent(Nn) : "",
        0 < On.length ? "&tdp=" + On.join(".") : "",
        "&z=0",
      ].join("");
    },
    Vn = function () {
      Rn = Un();
    },
    Un = function () {
      return [Wn, "&v=3&t=t", "&pid=" + Ha(), "&rv=" + Zg.we].join("");
    },
    xn = ["L", "S", "Y"],
    tn = ["S", "E"],
    Xn = { sampleRate: "0.005000", mi: "", li: Number("5") },
    Yn =
      0 <= H.location.search.indexOf("?gtm_latency=") ||
      0 <= H.location.search.indexOf("&gtm_latency="),
    Zn;
  if (!(Zn = Yn)) {
    var $n = Math.random(),
      ao = Xn.sampleRate;
    Zn = $n < ao;
  }
  var bo = Zn,
    Wn = "https://www.googletagmanager.com/a?id=" + Le.P + "&cv=1",
    co = {
      label: Le.P + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Rn = Un(),
    Gn = {},
    Hn = "",
    In = "",
    Pn = "",
    Mn = "",
    On = [],
    Nn = "",
    wn = {},
    vn = !1,
    sn = {},
    eo = {},
    Qn = "",
    mn = void 0,
    Sn = {},
    Jn = {},
    En = void 0,
    fo = 5;
  0 < Xn.li && (fo = Xn.li);
  var Kn = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Zj: function () {
          return c < a ? !1 : Sa() - d[c % a] < b;
        },
        zk: function () {
          var f = c++ % a;
          d[f] = Sa();
        },
      };
    })(fo, 1e3),
    Ln = 1e3,
    ho = function (a, b) {
      if (bo && void 0 !== a && !Jn[a] && mn !== a) {
        Bn();
        mn = a;
        Pn = Hn = "";
        Sn[a] = "&e=" + Dn(b) + "&eid=" + a;
        Fn();
      }
    },
    io = function (a, b, c, d) {
      if (bo && b) {
        var e,
          f = String(b[Ld.Pb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Jn[a]) {
          a !== mn && (Bn(), (mn = a));
          Hn = Hn ? Hn + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h)
            throw Error("Error: No function name given for function call.");
          var l = (me[h] ? "1" : "2") + e;
          Pn = Pn ? Pn + "." + l : "&ti=" + l;
          Fn();
          Cn();
        }
      }
    };
  var po = function (a, b, c) {
      if (bo && void 0 !== a && !Jn[a]) {
        a !== mn && (Bn(), (mn = a));
        var d = c + b;
        In = In ? In + "." + d : "&epr=" + d;
        Fn();
        Cn();
      }
    },
    qo = function (a, b, c) {},
    pn = ["S", "P", "C", "Z"],
    ro = {},
    so = ((ro[1] = 5), (ro[2] = 5), (ro[3] = 5), ro),
    nn = {},
    qn = {},
    Tn = void 0,
    to = function (a, b) {
      var c = !1;
      if (!bo || qn[a] || 0 === so[b]) return !1;
      --so[b];
      qn[a] = b;
      c = !0;
      return c;
    },
    uo = function (a, b, c) {
      if (!bo || !qn[a]) return;
      var d = nn[a];
      d || (nn[a] = d = {});
      d[b] = c;
    },
    vo = function () {
      if (bo) {
        m.setInterval(Vn, 864e5);
        Tb(m, "pagehide", function () {
          mn && qn[mn] && Bn(!0);
          for (var a in nn) nn.hasOwnProperty(a) && ((mn = Number(a)), Bn(!0));
        });
      }
    };
  var wo = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  wb();
  dk() || vb("iPod");
  vb("iPad");
  !vb("Android") || xb() || wb() || vb("Opera") || vb("Silk");
  xb();
  !vb("Safari") ||
    xb() ||
    vb("Coast") ||
    vb("Opera") ||
    vb("Edge") ||
    vb("Edg/") ||
    vb("OPR") ||
    wb() ||
    vb("Silk") ||
    vb("Android") ||
    ek();
  var xo = {},
    yo = null,
    zo = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!yo) {
        yo = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            l = 0;
          5 > l;
          l++
        ) {
          var n = g.concat(h[l].split(""));
          xo[l] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === yo[q] && (yo[q] = p);
          }
        }
      }
      for (
        var r = xo[f],
          u = Array(Math.floor(b.length / 3)),
          t = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          D = r[((y & 15) << 2) | (A >> 6)],
          G = r[A & 63];
        u[w++] = "" + B + C + D + G;
      }
      var E = 0,
        J = t;
      switch (b.length - v) {
        case 2:
          (E = b[v + 1]), (J = r[(E & 15) << 2] || t);
        case 1:
          var P = b[v];
          u[w] = "" + r[P >> 2] + r[((P & 3) << 4) | (E >> 4)] + J + t;
      }
      return u.join("");
    };
  var Ao =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Bo(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function Co() {
    var a = m.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Do() {
    var a = m,
      b,
      c;
    if (
      "function" !==
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    )
      return null;
    var d = Bo(a);
    if (d.uach_promise) return d.uach_promise;
    var e = a.navigator.userAgentData
      .getHighEntropyValues(Ao)
      .then(function (f) {
        null != d.uach || (d.uach = f);
        return f;
      });
    return (d.uach_promise = e);
  }
  var Eo = !1,
    Fo = function () {
      if (!Eo) {
        Eo = !0;
        var a = Sa(),
          b = Do();
      }
    },
    Go = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      a &&
        ((b.C[Q.g.pf] = a.architecture),
        (b.C[Q.g.qf] = a.bitness),
        a.fullVersionList &&
          (b.C[Q.g.rf] = a.fullVersionList
            .map(function (d) {
              return (
                encodeURIComponent(d.brand || "") +
                ";" +
                encodeURIComponent(d.version || "")
              );
            })
            .join("|")),
        c && (b.C[Q.g.jh] = a.mobile ? "1" : "0"),
        (b.C[Q.g.sf] = a.model),
        (b.C[Q.g.tf] = a.platform),
        (b.C[Q.g.uf] = a.platformVersion),
        (b.C[Q.g.vf] = a.wow64 ? "1" : "0"));
    };
  function Ho() {
    return "attribution-reporting";
  }
  function Io(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Jo = !1;
  function Ko() {
    if (Io("join-ad-interest-group") && Ba(Ib.joinAdInterestGroup)) return !0;
    Jo ||
      (lk(
        "A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Jo = !0));
    return Io("join-ad-interest-group") && Ba(Ib.joinAdInterestGroup);
  }
  function Lo(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Sa() - d) {
        jg("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          H.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          jg("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Rb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Sa() },
      c
    );
  }
  var Mo = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    No = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Oo = /^\d+\.fls\.doubleclick\.net$/,
    Po = /;gac=([^;?]+)/,
    Qo = /;gacgb=([^;?]+)/,
    Ro = /;gclaw=([^;?]+)/,
    So = /;gclgb=([^;?]+)/;
  function To(a, b) {
    if (Oo.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && 2 == c.length && c[1].match(Mo)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ma);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Uo = function (a, b, c) {
    var d = Tl() ? Pl("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = mm("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (l) {
            return 1 === l;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { Ij: f ? e.join(";") : "", Hj: To(d, Qo) };
  };
  function Vo(a, b, c) {
    if (Oo.test(H.location.host)) {
      var d = H.location.href.match(c);
      if (d && 2 == d.length && d[1].match(No)) return [{ ma: d[1] }];
    } else return Vl((a || "_gcl") + b);
    return [];
  }
  var Wo = function (a) {
      return Vo(a, "_aw", Ro)
        .map(function (b) {
          return b.ma;
        })
        .join(".");
    },
    Xo = function (a) {
      return Vo(a, "_gb", So)
        .map(function (b) {
          return b.ma;
        })
        .join(".");
    },
    Yo = function (a, b) {
      var c = mm(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Zo = function () {
    if (Ba(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Hp = function (a, b, c) {
    var d,
      e = a.GooglebQhCsO;
    e || ((e = {}), (a.GooglebQhCsO = e));
    d = e;
    if (d[b]) return !1;
    d[b] = [];
    d[b][0] = c;
    return !0;
  };
  var Ip = function (a, b) {
    var c = m,
      d = ik(a, "fmt");
    if (b) {
      var e = ik(a, "random"),
        f = ik(a, "label") || "";
      if (!e) return !1;
      var g = zo(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Hp(c, g, b)) return !1;
    }
    d && 4 != d && (a = kk(a, "rfmt", d));
    var h = kk(a, "fmt", 4);
    Pb(
      h,
      function () {
        c.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((c.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Yp = function () {
      this.h = {};
    },
    Zp = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    $p = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    bq = function (a, b, c, d, e) {};
  function dq(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ai("" + c + b).href;
    }
  }
  function eq(a, b) {
    return fq() ? dq(a, b) : void 0;
  }
  function fq() {
    var a = !1;
    return a;
  }
  function gq() {
    return !!Zg.xe && "SGTM_TOKEN" !== Zg.xe.split("@@").join("");
  }
  var iq = function (a, b, c) {
      if (!hq() && !Uj(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + Zg.na,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = gq();
        g && (e += "&sign=" + Zg.xe);
        var h = eq(b, d + e);
        if (!h) {
          var l = Zg.Jc + d;
          g &&
            Jb &&
            f &&
            (l = Jb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          h = Am("https://", "http://", l + e);
        }
        Sj().container[a] = 1;
        Pb(h);
      }
    },
    jq = function (a, b) {
      var c;
      if ((c = !hq())) {
        var d = Ta(Sj().destination, a);
        c = !(!0 === d || (d && d.state));
      }
      if (c)
        if (hg[31] && Vj())
          (Sj().destination[a] = { state: 0, transportUrl: b }), N(91);
        else {
          var e =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Zg.na +
            "&cx=c";
          gq() && (e += "&sign=" + Zg.xe);
          var f = eq(b, e);
          f || (f = Am("https://", "http://", Zg.Jc + e));
          Sj().destination[a] = { state: 1, transportUrl: void 0 };
          Pb(f);
        }
    };
  function hq() {
    if (Nj()) {
      return !0;
    }
    return !1;
  }
  var kq = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    lq = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    mq = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    nq =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var oq = function () {
      var a = !1;
      a = !0;
      return a;
    },
    qq = function (a) {
      var b = sh("gtm.allowlist") || sh("gtm.whitelist");
      b && N(9);
      oq() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Xa(Pa(b), lq),
        d = sh("gtm.blocklist") || sh("gtm.blacklist");
      d || ((d = sh("tagTypeBlacklist")) && N(3));
      d ? N(8) : (d = []);
      pq() &&
        ((d = Pa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Pa(d).indexOf("google") && N(2);
      var e = d && Xa(Pa(d), mq),
        f = {};
      return function (g) {
        var h = g && g[Ld.Pb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var l = lh[h] || [],
          n = a(h, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > c.indexOf(l[q])) {
                      N(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) r = u;
          else {
            var t = Ka(e, l || []);
            t && N(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= l.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ka(e, nq));
        return (f[h] = v);
      };
    },
    pq = function () {
      return kq.test(m.location && m.location.hostname);
    };
  var rq = { initialized: 11, complete: 12, interactive: 13 },
    sq = {},
    tq = Object.freeze(((sq[Q.g.Fa] = !0), sq)),
    uq =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics="),
    wq = function (a, b, c) {
      if ("config" !== a || 1 < wm(b).J.length) return;
      var d,
        e = Kb("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = K(c.vb);
      K(c.wa, f);
      var g = [],
        h;
      for (h in d) {
        var l = vq(d[h], f);
        l.length && (uq && console.log(l), g.push(h));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          Mn = Mn ? Mn + "!" + n : "&tdc=" + n;
        }
        jg("TAGGING", rq[H.readyState] || 14);
      }
      d[b] = f;
    };
  function xq(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function vq(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var u = r[q];
        return void 0 === u ? tq[q] : u;
      },
      f;
    for (f in xq(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        l = e(f, b),
        n = "object" === mc(h) || "array" === mc(h),
        p = "object" === mc(l) || "array" === mc(l);
      if (n && p) vq(h, l, c, g);
      else if (n || p || h !== l) c[g] = !0;
    }
    return Object.keys(c);
  }
  var yq = !1,
    zq = 0,
    Aq = [];
  function Bq(a) {
    if (!yq) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        yq = !0;
        for (var e = 0; e < Aq.length; e++) I(Aq[e]);
      }
      Aq.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function Cq() {
    if (!yq && 140 > zq) {
      zq++;
      try {
        H.documentElement.doScroll("left"), Bq();
      } catch (a) {
        m.setTimeout(Cq, 50);
      }
    }
  }
  var Dq = function (a) {
    yq ? a() : Aq.push(a);
  };
  var Eq = function () {
    this.K = 0;
    this.h = {};
  };
  Eq.prototype.s = function (a, b, c) {
    var d = ++this.K;
    this.h[a] = this.h[a] || {};
    this.h[a][String(d)] = { listener: b, kb: c };
    return d;
  };
  Eq.prototype.D = function (a, b) {
    var c = this.h[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Eq.prototype.H = function (a, b) {
    var c = [];
    La(this.h[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.kb || 0 <= b.indexOf(e.kb)) &&
        c.push(e.listener);
    });
    return c;
  };
  var Fq = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Le.P,
    };
  };
  var Hq = function (a, b) {
      this.h = !1;
      this.H = [];
      this.K = { tags: [] };
      this.aa = !1;
      this.s = this.D = 0;
      Gq(this, a, b);
    },
    Iq = function (a, b, c, d) {
      if (ch.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      pc(d) && (e = K(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    Jq = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Kq = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    Gq = function (a, b, c) {
      void 0 !== b && a.ze(b);
      c &&
        m.setTimeout(function () {
          return Kq(a);
        }, Number(c));
    };
  Hq.prototype.ze = function (a) {
    var b = this,
      c = Ua(function () {
        return I(function () {
          a(Le.P, b.K);
        });
      });
    this.h ? c() : this.H.push(c);
  };
  var Lq = function (a) {
      a.D++;
      return Ua(function () {
        a.s++;
        a.aa && a.s >= a.D && Kq(a);
      });
    },
    Mq = function (a) {
      a.aa = !0;
      a.s >= a.D && Kq(a);
    };
  var Nq = function () {
      function a(d) {
        return !Ca(d) || 0 > d ? 0 : d;
      }
      if (!$g._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = Ca(th.get("gtm.start")) ? th.get("gtm.start") : 0;
        $g._li = { cst: a(c - b), cbt: a(jh - b) };
      }
    },
    Oq = function (a) {
      m.performance && m.performance.mark(Le.P + "_" + a + "_start");
    },
    Pq = function (a) {
      if (m.performance) {
        var b = Le.P + "_" + a + "_start",
          c = Le.P + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = $g._p || {};
        void 0 === e[a] && ((e[a] = d.duration), ($g._p = e));
        return d.duration;
      }
    },
    Qq = function () {
      if (m.performance && m.performance.now) {
        var a = $g._p || {};
        a.PAGEVIEW = m.performance.now();
        $g._p = a;
      }
    };
  var Rq = {},
    Sq = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    Tq = !1;
  function Wq() {
    return m.GoogleAnalyticsObject || "ga";
  }
  var Xq = function (a) {},
    Yq = function (a, b) {
      return function () {
        var c = Sq(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function cr(a, b, c, d) {
    var e = ke[a],
      f = dr(a, b, c, d);
    if (!f) return null;
    var g = ue(e[Ld.Bh], c, []);
    if (g && g.length) {
      var h = g[0];
      f = cr(
        h.index,
        { W: f, V: 1 === h.Oh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function dr(a, b, c, d) {
    function e() {
      if (f[Ld.fj]) h();
      else {
        var w = ve(f, c, []),
          x = w[Ld.ui];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!ij(x[y])) {
              h();
              return;
            }
        var A = Iq(c.Db, String(f[Ld.Pb]), Number(f[Ld.Ch]), w[Ld.gj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Sa() - D;
            io(c.id, ke[a], "5", G);
            Jq(c.Db, A, "success", G);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Sa() - D;
            io(c.id, ke[a], "6", G);
            Jq(c.Db, A, "failure", G);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        io(c.id, f, "1");
        var C = function () {
          var G = Sa() - D;
          io(c.id, f, "7", G);
          Jq(c.Db, A, "exception", G);
          B || ((B = !0), h());
        };
        var D = Sa();
        try {
          te(w, { event: c, index: a, type: 1 });
        } catch (G) {
          C(G);
        }
      }
    }
    var f = ke[a],
      g = b.W,
      h = b.V,
      l = b.terminate;
    if (c.Rf(f)) return null;
    var n = ue(f[Ld.Dh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = cr(p.index, { W: g, V: h, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Oh ? l : q;
    }
    if (f[Ld.xh] || f[Ld.jj]) {
      var r = f[Ld.xh] ? le : c.Nk,
        u = g,
        t = h;
      if (!r[a]) {
        e = Ua(e);
        var v = er(a, r, e);
        g = v.W;
        h = v.V;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function er(a, b, c) {
    var d = [],
      e = [];
    b[a] = fr(d, e, c);
    return {
      W: function () {
        b[a] = gr;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      V: function () {
        b[a] = hr;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function fr(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function gr(a) {
    a();
  }
  function hr(a, b) {
    b();
  }
  var jr = function (a, b) {
      return 1 === arguments.length ? ir("set", a) : ir("set", a, b);
    },
    kr = function (a, b) {
      return 1 === arguments.length ? ir("config", a) : ir("config", a, b);
    },
    lr = function (a, b, c) {
      c = c || {};
      c[Q.g.Nb] = a;
      return ir("event", b, c);
    };
  function ir(a) {
    return arguments;
  }
  var mr = function () {
    this.h = [];
    this.s = [];
  };
  mr.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (g) {}
  };
  mr.prototype.listen = function (a) {
    this.s.push(a);
  };
  mr.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  mr.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var or = function (a, b, c) {
      nr().enqueue(a, b, c);
    },
    qr = function () {
      var a = pr;
      nr().listen(a);
    };
  function nr() {
    var a = $g.mb;
    a || ((a = new mr()), ($g.mb = a));
    return a;
  }
  var yr = function (a) {
      var b = $g.zones;
      return b
        ? b.getIsAllowedFn(Pj(), a)
        : function () {
            return !0;
          };
    },
    zr = function (a) {
      var b = $g.zones;
      return b ? b.isActive(Pj(), a) : !0;
    };
  var Cr = function (a, b) {
    for (var c = [], d = 0; d < ke.length; d++)
      if (a[d]) {
        var e = ke[d];
        var f = Lq(b.Db);
        try {
          var g = cr(d, { W: f, V: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              l = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = me[p];
            l.call(h, {
              ii: n,
              Zh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Ar(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(Br);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  var Er = function (a, b) {
    if (!Dr) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = Dr.H(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Lq(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function Br(a, b) {
    var c,
      d = b.Zh,
      e = a.Zh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.ii,
        h = b.ii;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Ar(a, b) {
    if (!bo) return;
    var c = function (d) {
      var e = b.Rf(ke[d]) ? "3" : "4",
        f = ue(ke[d][Ld.Bh], b, []);
      f && f.length && c(f[0].index);
      io(b.id, ke[d], e);
      var g = ue(ke[d][Ld.Dh], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Fr = !1,
    Dr;
  var Gr = function () {
    Dr || (Dr = new Eq());
    return Dr;
  };
  var Lr = function (a) {
    var b = Sa(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (Fr) return !1;
      Fr = !0;
    }
    var h,
      l = !1;
    if (zr(c)) h = yr(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      l = !0;
      h = yr(Number.MAX_SAFE_INTEGER);
    }
    ho(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Rf: qq(h),
        Nk: [],
        Uh: function () {
          N(6);
        },
        Hh: Hr(),
        Ih: Ir(c),
        Db: new Hq(q, p),
      },
      u = Ge(r);
    l && (u = Jr(u));
    var t = Cr(u, r),
      v = !1;
    v = Er(a, r.Db);
    Mq(r.Db);
    ("gtm.js" !== e && "gtm.sync" !== e) || Xq(Le.P);
    return Kr(u, t) || v;
  };
  function Ir(a) {
    return function (b) {
      bo && (tc(b) || qo(a, "input", b));
    };
  }
  function Hr() {
    var a = {};
    a.event = xh("event", 1);
    a.ecommerce = xh("ecommerce", 1);
    a.gtm = xh("gtm");
    a.eventModel = xh("eventModel");
    return a;
  }
  function Jr(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(ke[c][Ld.Pb]),
          e;
        if (!(e = bh[d] || void 0 !== ke[c][Ld.kj])) {
          var f = ke[c]["function"];
          if (!f) throw "Error: No function name given for function call.";
          var g = me[f];
          e = g ? g.isInfrastructure || !1 : !1;
        }
        if (
          e ||
          0 === d.indexOf("__ccd") ||
          0 === d.indexOf("__ogt") ||
          "__set_product_settings" === d
        )
          b[c] = !0;
      }
    return b;
  }
  function Kr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ke[c] && !ch[String(ke[c][Ld.Pb])]) return !0;
    return !1;
  }
  var Mr = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.wa = {};
      this.h = {};
      this.Ba = {};
      this.vb = {};
      this.s = {};
      this.fa = {};
      this.eventMetadata = {};
      this.W = function () {};
      this.V = function () {};
      this.F = !1;
    },
    Nr = function (a, b) {
      a.wa = b;
      return a;
    },
    Or = function (a, b) {
      a.h = b;
      return a;
    },
    Pr = function (a, b) {
      a.Ba = b;
      return a;
    },
    Qr = function (a, b) {
      a.vb = b;
      return a;
    },
    Rr = function (a, b) {
      a.s = b;
      return a;
    },
    Sr = function (a, b) {
      a.fa = b;
      return a;
    },
    Tr = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Ur = function (a, b) {
      a.W = b;
      return a;
    },
    Vr = function (a, b) {
      a.V = b;
      return a;
    },
    R = function (a, b) {
      if (void 0 !== a.wa[b]) return a.wa[b];
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.Ba[b]) return a.Ba[b];
      Wr(a, a.vb[b], a.s[b]) && (N(71), N(79));
      if (void 0 !== a.vb[b]) return a.vb[b];
      if (void 0 !== a.fa[b]) return a.fa[b];
    },
    Xr = function (a) {
      function b(g) {
        for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1;
      }
      var c = {};
      b(a.wa);
      b(a.h);
      b(a.Ba);
      b(a.vb);
      for (var d = Object.keys(a.s), e = 0; e < d.length; e++) {
        var f = d[e];
        if (
          "event" !== f &&
          "gtm" !== f &&
          "tagTypeBlacklist" !== f &&
          !c.hasOwnProperty(f)
        ) {
          N(71);
          N(80);
          break;
        }
      }
      return Object.keys(c);
    },
    rp = function (a, b, c) {
      function d(l) {
        pc(l) &&
          La(l, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.fa[b]), d(a.vb[b]), d(a.Ba[b]), d(a.h[b]));
      (c && 2 !== c) || d(a.wa[b]);
      var g = f,
        h = e;
      e = {};
      f = !1;
      (c && 1 !== c) || (d(a.fa[b]), d(a.s[b]), d(a.Ba[b]), d(a.h[b]));
      (c && 2 !== c) || d(a.wa[b]);
      if (f !== g || Wr(a, e, h)) N(71), N(81);
      f = g;
      e = h;
      return f ? e : void 0;
    },
    Yr = function (a) {
      var b = [Q.g.Vc, Q.g.Xd, Q.g.Yd, Q.g.Zd, Q.g.ae, Q.g.be, Q.g.ce],
        c = {},
        d = !1,
        e = function (h) {
          for (var l = 0; l < b.length; l++)
            void 0 !== h[b[l]] && ((c[b[l]] = h[b[l]]), (d = !0));
          return d;
        };
      if (e(a.wa) || e(a.h) || e(a.Ba)) return c;
      e(a.vb);
      var f = c,
        g = d;
      c = {};
      d = !1;
      e(a.s);
      Wr(a, c, f) && (N(71), N(82));
      c = f;
      d = g;
      if (d) return c;
      e(a.fa);
      return c;
    },
    Wr = function (a, b, c) {
      try {
        if (b === c) return !1;
        var d = mc(b);
        if (d !== mc(c) || !((pc(b) && pc(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Wr(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Wr(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        N(72);
      }
      return !1;
    };
  var Ws = function () {
      var a = !0;
      (Hk(7) && Hk(9) && Hk(10)) || (a = !1);
      return a;
    },
    Xs = function () {
      var a = !0;
      (Hk(3) && Hk(4)) || (a = !1);
      return a;
    };
  var tu = function (a, b, c, d) {
      su.push("event", [b, a], c, d);
    },
    uu = function (a, b, c, d) {
      su.push("get", [a, b], c, d);
    },
    vu = function () {
      return su.D[Q.g.la];
    },
    wu = function () {
      this.status = 1;
      this.Ba = {};
      this.h = {};
      this.fa = {};
      this.s = {};
      this.H = null;
      this.D = !1;
    },
    xu = function (a, b, c, d) {
      var e = Math.floor(Sa() / 1e3);
      this.type = a;
      this.s = e;
      this.da = b || "";
      this.h = c;
      this.messageContext = d;
    },
    yu = function () {
      this.s = {};
      this.D = {};
      this.h = [];
    },
    zu = function (a, b) {
      var c = wm(b);
      return (a.s[c.U] = a.s[c.U] || new wu());
    },
    Au = function (a, b, c, d) {
      if (d.da) {
        var e = zu(a, d.da),
          f = e.H;
        if (f) {
          var g = K(c),
            h = K(e.h[d.da]),
            l = K(e.Ba),
            n = K(e.fa),
            p = K(a.D),
            q = {};
          try {
            q = K(ph);
          } catch (v) {
            N(72);
          }
          var r = wm(d.da).prefix,
            u = function (v) {
              po(d.messageContext.eventId, r, v);
              var w = g[Q.g.jc];
              w && I(w);
            },
            t = Vr(
              Ur(
                Tr(
                  Rr(
                    Qr(
                      Sr(
                        Pr(
                          Or(
                            Nr(
                              new Mr(
                                d.messageContext.eventId,
                                d.messageContext.priorityId
                              ),
                              g
                            ),
                            h
                          ),
                          l
                        ),
                        n
                      ),
                      p
                    ),
                    q
                  ),
                  d.messageContext.eventMetadata
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v("2");
                  }
                }
              ),
              function () {
                if (u) {
                  var v = u;
                  u = void 0;
                  v("3");
                }
              }
            );
          try {
            po(d.messageContext.eventId, r, "1"), wq(d.type, d.da, t);
            f(d.da, b, d.s, t);
          } catch (v) {
            po(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  yu.prototype.register = function (a, b, c) {
    var d = zu(this, a);
    3 !== d.status &&
      ((d.H = b), (d.status = 3), c && (K(d.fa, c), (d.fa = c)), this.flush());
  };
  yu.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!wm(c)) return;
      a: if (c) {
        var e = wm(c);
        if (e && 1 === zu(this, c).status) {
          zu(this, c).status = 2;
          this.push("require", [{}], e.U, {});
        }
      }
      zu(this, c).D && (d.deferrable = !1);
    }
    this.h.push(new xu(a, c, b, d));
    d.deferrable || this.flush();
  };
  yu.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.da || zu(this, f.da).D
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = zu(this, f.da);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            La(f.h[0], function (r, u) {
              K(ab(r, u), b.D);
            });
            break;
          case "config":
            g = zu(this, f.da);
            e.xb = {};
            La(
              f.h[0],
              (function (r) {
                return function (u, t) {
                  K(ab(u, t), r.xb);
                };
              })(e)
            );
            var h = !!e.xb[Q.g.hd];
            delete e.xb[Q.g.hd];
            var l = wm(f.da),
              n = l.U === l.id;
            h || (n ? (g.Ba = {}) : (g.h[f.da] = {}));
            (g.D && h) || Au(this, Q.g.Da, e.xb, f);
            g.D = !0;
            n ? K(e.xb, g.Ba) : (K(e.xb, g.h[f.da]), N(70));
            d = !0;
            break;
          case "event":
            g = zu(this, f.da);
            e.Pd = {};
            La(
              f.h[0],
              (function (r) {
                return function (u, t) {
                  K(ab(u, t), r.Pd);
                };
              })(e)
            );
            Au(this, f.h[1], e.Pd, f);
            break;
          case "get":
            g = zu(this, f.da);
            var p = {},
              q = ((p[Q.g.cb] = f.h[0]), (p[Q.g.sb] = f.h[1]), p);
            Au(this, Q.g.Ma, q, f);
        }
        this.h.shift();
        Bu(this, f);
      }
      e = { xb: e.xb, Pd: e.Pd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Bu = function (a, b) {
      if ("require" !== b.type)
        if (b.da)
          for (var c = zu(a, b.da).s[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.s)
            if (a.s.hasOwnProperty(e)) {
              var f = a.s[e];
              if (f && f.s)
                for (var g = f.s[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    Cu = function (a, b) {
      var c = su,
        d = K(b);
      K(zu(c, a).fa, d);
      zu(c, a).fa = d;
    },
    su = new yu();
  var Pe;
  var Du = {},
    Eu = {},
    Fu = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Du[b[c]] || [];
        Du[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Gu = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Eu[b[c]] || [];
        Eu[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Hu = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Ud: d.Ud, Rd: d.Rd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-")) {
          if (((d.Ud = wm(f)), d.Ud)) {
            var g = Qj();
            Ga(
              g,
              (function (q) {
                return function (r) {
                  return q.Ud.U === r;
                };
              })(d)
            )
              ? b.push(f)
              : c.push(f);
          }
        } else {
          var h = Du[f] || [];
          d.Rd = {};
          h.forEach(
            (function (q) {
              return function (r) {
                return (q.Rd[r] = !0);
              };
            })(d)
          );
          for (var l = Pj(), n = 0; n < l.length; n++)
            if (d.Rd[l[n]]) {
              b = b.concat(Qj());
              break;
            }
          var p = Eu[f] || [];
          p.length && (b = b.concat(p));
        }
      }
      return { ik: b, lk: c };
    },
    Iu = function (a) {
      La(Du, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Ju = function (a) {
      La(Eu, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ku = "HA GF G UA AW DC MC".split(" "),
    Lu = !1,
    Mu = !1;
  function Nu(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: mh() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Ou = {
      config: function (a, b) {
        var c = Nu(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !pc(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = wm(a[1]);
          if (e) {
            ho(c.eventId, "gtag.config");
            var f = e.id === e.U,
              g = e.U,
              h = !1,
              l = !!d[Q.g.hd],
              n = f && -1 !== Pj().indexOf(g);
            n && !l && ((h = Mu), (Mu = !0));
            if (!(hh && f && h)) {
              var p = d[Q.g.la] || vu();
              if (!f) {
                if (
                  !Ga(Qj(), function (x) {
                    return x === e.U;
                  })
                ) {
                  jq(e.U, p);
                  return;
                }
              } else if (!n && !Nj()) {
                iq(g, p, !0);
                return;
              }
              b.noTargetGroup ||
                (f
                  ? (Iu(e.id), Fu(e.id, d[Q.g.me] || "default"))
                  : (Ju(e.id), Gu(e.id, d[Q.g.me] || "default")));
              delete d[Q.g.me];
              Lu || N(43);
              var q = [e.id];
              f && (q = Qj());
              for (var r = !1, u = 0; u < q.length; u++) {
                var t = wm(q[u]),
                  v = K(b);
                if (t && -1 !== Ku.indexOf(t.prefix)) {
                  var w = v.eventMetadata || {};
                  w.hasOwnProperty("is_external_event") ||
                    (w.is_external_event = !v.fromContainerExecution);
                  v.eventMetadata = w;
                  delete d[Q.g.jc];
                  su.push("config", [d], t.id, v);
                  r = !0;
                }
              }
              r ||
                (vh("gtag.targets." + e.id), vh("gtag.targets." + e.id, K(d)));
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          N(39);
          var c = Nu(a, b),
            d = a[1];
          "default" === d ? fj(a[2]) : "update" === d && hj(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!pc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = K(e)),
            e[Q.g.jc] && (g.eventCallback = e[Q.g.jc]),
            e[Q.g.fe] && (g.eventTimeout = e[Q.g.fe]));
          var h = Nu(a, b),
            l = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = l;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Nb];
          void 0 === r &&
            ((r = sh(Q.g.Nb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Da(r)) {
            var u = r.toString().replace(/\s+/g, "").split(","),
              t = Hu(u),
              v = t.ik,
              w = t.lk;
            if (w.length)
              for (var x = (q && q[Q.g.la]) || vu(), y = 0; y < w.length; y++) {
                var A = wm(w[y]);
                A && jq(A.U, x);
              }
            p = ym(v);
          } else p = void 0;
          var B = p;
          if (B) {
            ho(l, c);
            for (var C = [], D = 0; D < B.length; D++) {
              var G = B[D],
                E = K(b);
              if (-1 !== Ku.indexOf(G.prefix)) {
                var J = K(d),
                  P = E.eventMetadata || {};
                P.hasOwnProperty("is_external_event") ||
                  (P.is_external_event = !E.fromContainerExecution);
                E.eventMetadata = P;
                delete J[Q.g.jc];
                tu(c, J, G.id, E);
              }
              C.push(G.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[Q.g.Nb] = C.join())
              : delete g.eventModel[Q.g.Nb];
            Lu || N(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        N(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ba(a[3])) {
          var c = wm(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Lu || N(43);
            var f = vu();
            if (
              !Ga(Qj(), function (h) {
                return c.U === h;
              })
            )
              jq(c.U, f);
            else if (-1 !== Ku.indexOf(c.prefix)) {
              Nu(a, b);
              var g = {};
              bj(K(((g[Q.g.cb] = d), (g[Q.g.sb] = e), g)));
              uu(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Lu = !0;
          var c = Nu(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ba(a[2])) {
          var b = a[1],
            c = a[2],
            d = Pe.s;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((N(74), "all" === a[1])) {
            N(75);
            var e = !1;
            try {
              e = a[2](Le.P, "unknown", {});
            } catch (f) {}
            e || N(76);
          }
        } else {
          N(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && pc(a[1])
          ? (c = K(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            pc(a[2]) || Da(a[2]) ? (c[a[1]] = K(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Nu(a, b),
            e = d.eventId,
            f = d.priorityId;
          K(c);
          var g = K(c);
          su.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Pu = { policy: !0 };
  var Qu = function (a) {
      var b = m[Zg.na].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Ru = function (a) {
      var b = m[Zg.na],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Su = !1,
    Tu = [];
  function Uu() {
    if (!Su) {
      Su = !0;
      for (var a = 0; a < Tu.length; a++) I(Tu[a]);
    }
  }
  var Vu = function (a) {
    Su ? I(a) : Tu.push(a);
  };
  var lv = function (a) {
    if (kv(a)) return a;
    this.Za = a;
  };
  lv.prototype.getUntrustedMessageValue = function () {
    return this.Za;
  };
  var kv = function (a) {
    return !a || "object" !== mc(a) || pc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  lv.prototype.getUntrustedMessageValue = lv.prototype.getUntrustedMessageValue;
  var mv = 0,
    nv = {},
    ov = [],
    pv = [],
    qv = !1,
    rv = !1;
  function sv(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var tv = function (a) {
      return m[Zg.na].push(a);
    },
    uv = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return tv(a);
    },
    vv = function (a, b) {
      var c = $g[Zg.na],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = m.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (m.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function wv(a, b) {
    var c = a._clear || b.overwriteModelFields;
    La(a, function (e, f) {
      "_clear" !== e && (c && vh(e), vh(e, f));
    });
    ih || (ih = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = mh()), (a["gtm.uniqueEventId"] = d), vh("gtm.uniqueEventId", d));
    return Lr(a);
  }
  function xv(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ma(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function yv() {
    var a;
    if (pv.length) a = pv.shift();
    else if (ov.length) a = ov.shift();
    else return;
    var b;
    var c = a;
    if (qv || !xv(c.message)) b = c;
    else {
      qv = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = mh());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      ov.unshift(h, c);
      b: {
        var l = Le.P;
        if (!l) break b;
        var n,
          p = ai(m.location.href);
        n = p.hostname + p.pathname;
        Nn || (Nn = n);
        On.push(l);
      }
      b = f;
    }
    return b;
  }
  function zv() {
    for (var a = !1, b; !rv && (b = yv()); ) {
      rv = !0;
      delete ph.eventModel;
      rh();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) rv = !1;
      else {
        e.fromContainerExecution && wh();
        try {
          if (Ba(d))
            try {
              d.call(th);
            } catch (v) {}
          else if (Da(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                l = f.slice(1),
                n = sh(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, l);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (Ma(d))
              a: {
                if (d.length && k(d[0])) {
                  var q = Ou[d[0]];
                  if (q && (!e.fromContainerExecution || !Pu[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = wv(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && rh(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var u = nv[String(r)] || [], t = 0; t < u.length; t++)
              pv.push(Av(u[t]));
            u.length && pv.sort(sv);
            delete nv[String(r)];
            r > mv && (mv = r);
          }
          rv = !1;
        }
      }
    }
    return !a;
  }
  function Bv() {
    var b = zv();
    try {
      Qu(Le.P);
    } catch (c) {}
    return b;
  }
  function pr(a) {
    if (mv < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      nv[b] = nv[b] || [];
      nv[b].push(a);
    } else
      pv.push(Av(a)),
        pv.sort(sv),
        I(function () {
          rv || zv();
        });
  }
  function Av(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Dv = function () {
      function a(f) {
        var g = {};
        if (kv(f)) {
          var h = f;
          f = kv(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Kb(Zg.na, []),
        c = ($g[Zg.na] = $g[Zg.na] || {});
      !0 === c.pruned && N(83);
      nv = nr().get();
      qr();
      Dq(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Vu(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < $g.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new lv(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        ov.push.apply(ov, h);
        var l = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (N(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof l || l;
        return zv() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      ov.push.apply(ov, e);
      if (Cv()) {
        I(Bv);
      }
    },
    Cv = function () {
      var a = !0;
      return a;
    };
  function Ev(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Sa();
    return b < c + 3e5 && b > c - 9e5;
  }
  var pe = {};
  pe.se = new String("undefined");
  var Hv = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": $b(a, "className"),
        "gtm.elementId": a["for"] || Vb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || $b(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        $b(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Iv = function (a) {
      $g.hasOwnProperty("autoEventsSettings") || ($g.autoEventsSettings = {});
      var b = $g.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Jv = function (a, b, c) {
      Iv(a)[b] = c;
    },
    Kv = function (a, b, c, d) {
      var e = Iv(a),
        f = Ta(e, b, d);
      e[b] = c(f);
    },
    Lv = function (a, b, c) {
      var d = Iv(a);
      return Ta(d, b, c);
    },
    Mv = function (a) {
      return "string" === typeof a ? a : String(mh());
    };
  var Sv = !!m.MutationObserver,
    Tv = void 0,
    Uv = function (a) {
      if (!Tv) {
        var b = function () {
          var c = H.body;
          if (c)
            if (Sv)
              new MutationObserver(function () {
                for (var e = 0; e < Tv.length; e++) I(Tv[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Tb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  I(function () {
                    d = !1;
                    for (var e = 0; e < Tv.length; e++) I(Tv[e]);
                  }));
              });
            }
        };
        Tv = [];
        H.body ? b() : I(b);
      }
      Tv.push(a);
    };
  var ew = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Sa() - e) * g.playbackRate) / 1e3 : 0;
      e = Sa();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, h, l) {
        var n = a(),
          p = n.Lf,
          q =
            void 0 !== l
              ? Math.round(l)
              : void 0 !== h
              ? Math.round(n.Lf * h)
              : Math.round(n.Mh),
          r =
            void 0 !== h
              ? Math.round(100 * h)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          u = H.hidden ? !1 : 0.5 <= Oh(c);
        d();
        var t = void 0;
        void 0 !== b && (t = [b]);
        var v = Hv(c, "gtm.video", t);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = r;
        v["gtm.videoVisible"] = u;
        return v;
      },
      ei: function () {
        e = Sa();
      },
      xc: function () {
        d();
      },
    };
  };
  var fw = m.clearTimeout,
    gw = m.setTimeout,
    T = function (a, b, c, d) {
      if (Nj()) {
        b && I(b);
      } else return Pb(a, b, c, d);
    },
    hw = function () {
      return new Date();
    },
    iw = function () {
      return m.location.href;
    },
    jw = function (a) {
      return Zh(ai(a), "fragment");
    },
    kw = function (a) {
      return $h(ai(a));
    },
    lw = function (a, b) {
      return sh(a, b || 2);
    },
    mw = function (a, b, c) {
      return b ? uv(a, b, c) : tv(a);
    },
    nw = function (a, b) {
      m[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    ow = function (a, b, c) {
      return uj(a, b, void 0 === c ? !0 : !!c);
    },
    pw = function (a, b, c) {
      return 0 === Dj(a, b, c);
    },
    qw = function (a, b) {
      if (Nj()) {
        b && I(b);
      } else Rb(a, b);
    },
    rw = function (a) {
      return !!Lv(a, "init", !1);
    },
    sw = function (a) {
      Jv(a, "init", !0);
    },
    tw = function (a, b, c) {
      bo && (tc(a) || qo(c, b, a));
    };
  var Rw = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Sw(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Tw = new Ja();
  function Uw(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Tw.get(e);
      f || ((f = new RegExp(b, d)), Tw.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Vw(a, b) {
    function c(g) {
      var h = ai(g),
        l = Zh(h, "protocol"),
        n = Zh(h, "host", !0),
        p = Zh(h, "port"),
        q = Zh(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" === l && "80" === p) ||
        ("https" === l && "443" === p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Ww(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Xw(a, b) {
    return String(a) === String(b);
  }
  function Yw(a, b) {
    return Number(a) >= Number(b);
  }
  function Zw(a, b) {
    return Number(a) <= Number(b);
  }
  function $w(a, b) {
    return Number(a) > Number(b);
  }
  function ax(a, b) {
    return Number(a) < Number(b);
  }
  function bx(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  function cx(a) {
    return dx(a) ? 1 : 0;
  }
  function dx(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = K(a, {});
        K({ arg1: c[d], any_of: void 0 }, e);
        if (cx(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Ww(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Rw.length; g++) {
                var h = Rw[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (l) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Sw(b, c);
      case "_eq":
        return Xw(b, c);
      case "_ge":
        return Yw(b, c);
      case "_gt":
        return $w(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Zw(b, c);
      case "_lt":
        return ax(b, c);
      case "_re":
        return Uw(b, c, a.ignore_case);
      case "_sw":
        return bx(b, c);
      case "_um":
        return Vw(b, c);
    }
    return !1;
  }
  function ex(a, b) {
    var c = this;
  }
  ex.O = "addConsentListener";
  var fx;
  var gx = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (fx)
        try {
          a[b]();
        } catch (c) {
          N(77);
        }
      else a[b]();
  };
  function hx(a, b, c) {
    var d = this,
      e;
    L(
      F(this),
      ["eventName:!string", "callback:!Fn", "triggerId:?string"],
      arguments
    ),
      gx([
        function () {
          return M(d, "listen_data_layer", a);
        },
      ]),
      (e = Gr().s(a, rc(b), c));
    return e;
  }
  hx.N = "internal.addDataLayerEventListener";
  function ix(a, b, c) {}
  ix.O = "addDocumentEventListener";
  function jx(a, b, c, d) {}
  jx.O = "addElementEventListener";
  function kx(a) {}
  kx.O = "addEventCallback";
  function ox(a) {}
  ox.N = "internal.addFormAbandonmentListener";
  var px = {},
    qx = [],
    rx = {},
    sx = 0,
    tx = 0;
  function Ax(a, b) {}
  Ax.N = "internal.addFormInteractionListener";
  function Hx(a, b) {}
  Hx.N = "internal.addFormSubmitListener";
  function Mx(a) {}
  Mx.N = "internal.addGaSendListener";
  var Nx = {},
    Ox = [];
  var Vx = function (a, b) {};
  Vx.N = "internal.addHistoryChangeListener";
  function Wx(a, b, c) {}
  Wx.O = "addWindowEventListener";
  function Xx(a, b) {
    return !0;
  }
  Xx.O = "aliasInWindow";
  function Yx(a, b, c) {}
  Yx.N = "internal.appendRemoteConfigParameter";
  function Zx() {
    var a = 2;
    return a;
  }
  function $x(a, b) {
    var c;
    return c;
  }
  $x.O = "callInWindow";
  function ay(a) {}
  ay.O = "callLater";
  function by(a) {}
  by.N = "callOnDomReady";
  function cy(a) {}
  cy.N = "callOnWindowLoad";
  function dy(a) {
    var b;
    return b;
  }
  dy.N = "internal.computeGtmParameter";
  function ey(a, b) {
    var c;
    var d = qc(c, this.h, Zx());
    void 0 === d && void 0 !== c && N(45);
    return d;
  }
  ey.O = "copyFromDataLayer";
  function fy(a) {
    var b;
    return b;
  }
  fy.O = "copyFromWindow";
  function gy(a, b) {
    var c;
    return c;
  }
  gy.N = "internal.copyPreHit";
  function hy(a, b) {
    var c = null,
      d = Zx();
    return qc(c, this.h, d);
  }
  hy.O = "createArgumentsQueue";
  function iy(a) {
    var b;
    return qc(b, this.h, Zx());
  }
  iy.O = "createQueue";
  var jy = {},
    ky = [],
    ly = {},
    my = 0,
    ny = 0;
  function ty(a, b) {
    var c = this;
    return b;
  }
  ty.N = "internal.enableAutoEventOnFormInteraction";
  function yy(a, b) {
    var c = this;
    return b;
  }
  yy.N = "internal.enableAutoEventOnFormSubmit";
  function Dy() {
    var a = this;
  }
  Dy.N = "internal.enableAutoEventOnGaSend";
  var Ey = {},
    Fy = [];
  var Hy = function (a, b) {
      var c = "" + b;
      if (Ey[c]) Ey[c].push(a);
      else {
        var d = [a];
        Ey[c] = d;
        var e = Gy(),
          f = -1;
        Fy.push(function (g) {
          0 <= f && m.clearTimeout(f);
          b
            ? (f = m.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    Gy = function () {
      var a = m.location.href,
        b = {
          source: null,
          state: m.history.state || null,
          url: $h(ai(a)),
          T: Zh(ai(a), "fragment"),
        };
      return function (c, d) {
        var e = b,
          f = {};
        f[e.source] = !0;
        f[c.source] = !0;
        if (!f.popstate || !f.hashchange || e.T != c.T) {
          var g = {},
            h =
              ((g.event = "gtm.historyChange-v2"),
              (g["gtm.historyChangeSource"] = c.source),
              (g["gtm.oldUrlFragment"] = b.T),
              (g["gtm.newUrlFragment"] = c.T),
              (g["gtm.oldHistoryState"] = b.state),
              (g["gtm.newHistoryState"] = c.state),
              (g["gtm.oldUrl"] = b.url),
              (g["gtm.newUrl"] = c.url),
              (g["gtm.triggers"] = d.join(",")),
              g);
          b = c;
          tv(h);
        }
      };
    },
    Iy = function (a, b) {
      var c = m.history,
        d = c[a];
      if (Ba(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = m.location.href;
            b({
              source: a,
              state: e,
              url: $h(ai(h)),
              T: Zh(ai(h), "fragment"),
            });
          };
        } catch (e) {}
    },
    Ky = function (a) {
      m.addEventListener("popstate", function (b) {
        var c = Jy(b);
        a({
          source: "popstate",
          state: b.state,
          url: $h(ai(c)),
          T: Zh(ai(c), "fragment"),
        });
      });
    },
    Ly = function (a) {
      m.addEventListener("hashchange", function (b) {
        var c = Jy(b);
        a({
          source: "hashchange",
          state: null,
          url: $h(ai(c)),
          T: Zh(ai(c), "fragment"),
        });
      });
    },
    Jy = function (a) {
      return a.target && a.target.location && a.target.location.href
        ? a.target.location.href
        : m.location.href;
    };
  function My(a, b) {
    var c = this;
    L(F(this), ["options:?DustMap", "triggerId:?*"], arguments);
    gx([
      function () {
        return M(c, "process_dom_events", "window", "popstate");
      },
      function () {
        return M(c, "process_dom_events", "window", "pushstate");
      },
    ]);
    b = Mv(b);
    var d = Number(a && a.get("interval"));
    (0 < d && isFinite(d)) || (d = 0);
    if (Lv("ehl", "init", !1)) {
      var e = Lv("ehl", "reg");
      e && e(b, d);
    } else {
      var f = function (g) {
        for (var h = 0; h < Fy.length; h++) Fy[h](g);
      };
      Ly(f);
      Ky(f);
      Iy("pushState", f);
      Iy("replaceState", f);
      Hy(b, d);
      Jv("ehl", "reg", Hy);
      Jv("ehl", "init", !0);
    }
    return b;
  }
  My.N = "internal.enableAutoEventOnHistoryChange";
  var Ny = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = $b(b, "href"),
        d = c.indexOf("#"),
        e = $b(b, "target");
      if ((e && "_self" !== e && "_parent" !== e && "_top" !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = $h(ai(c)),
          g = $h(ai(m.location.href));
        return f !== g;
      }
      return !0;
    },
    Oy = function (a, b) {
      for (
        var c = Zh(
            ai(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                $b(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    Py = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.Sf || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Yb(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = Lv("aelc", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? Lv("aelc", "nv.ids", []) : Lv("aelc", "ids", []);
            for (var h = [], l = 0; l < g.length; l++) {
              var n = g[l],
                p = Lv("aelc", "aff.map", {})[n];
              (p && !Oy(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = Ny(c, d),
                r = Hv(d, "gtm.linkClick", h);
              r["gtm.elementText"] = Wb(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var u = !!Ga(
                  String($b(d, "rel") || "").split(" "),
                  function (x) {
                    return "noreferrer" === x.toLowerCase();
                  }
                );
                u && N(36);
                var t = m[($b(d, "target") || "_self").substring(1)],
                  v = !0,
                  w = vv(function () {
                    var x;
                    if ((x = v && t)) {
                      var y;
                      a: if (u) {
                        var A;
                        try {
                          A = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (B) {
                          if (!H.createEvent) {
                            y = !1;
                            break a;
                          }
                          A = H.createEvent("MouseEvents");
                          A.initEvent(c.type, !0, !0);
                        }
                        A.Sf = !0;
                        c.target.dispatchEvent(A);
                        y = !0;
                      } else y = !1;
                      x = !y;
                    }
                    x && (t.location.href = $b(d, "href"));
                  }, f);
                if (uv(r, w, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else uv(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Tb(H, "click", b, !1);
      Tb(H, "auxclick", b, !1);
    };
  function Qy(a, b) {
    var c = this;
    L(F(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
    gx([
      function () {
        return M(c, "process_dom_events", "document", "click");
      },
      function () {
        return M(c, "process_dom_events", "document", "auxclick");
      },
    ]);
    var d = rc(a),
      e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Mv(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var l = function (p) {
        return Math.max(h, p);
      };
      Kv("aelc", "mwt", l, 0);
      f || Kv("aelc", "nv.mwt", l, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    Kv("aelc", "ids", n, []);
    f || Kv("aelc", "nv.ids", n, []);
    g &&
      Kv(
        "aelc",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    Lv("aelc", "init", !1) || (Py(), Jv("aelc", "init", !0));
    return b;
  }
  Qy.N = "internal.enableAutoEventOnLinkClick";
  var Ry, Sy;
  var Ty = function (a) {
      return Lv("sdl", a, {});
    },
    Uy = function (a, b, c) {
      b &&
        (Array.isArray(a) || (a = [a]),
        Kv(
          "sdl",
          c,
          function (d) {
            for (var e = 0; e < a.length; e++) {
              var f = String(a[e]);
              d.hasOwnProperty(f) || (d[f] = []);
              d[f].push(b);
            }
            return d;
          },
          {}
        ));
    },
    Xy = function () {
      var a = 250,
        b = !1;
      H.scrollingElement &&
        H.documentElement &&
        m.addEventListener &&
        ((a = 50), (b = !0));
      var c = 0,
        d = !1,
        e = function () {
          d
            ? (c = m.setTimeout(e, a))
            : ((c = 0),
              Vy(),
              Lv("sdl", "init", !1) &&
                !Wy() &&
                (Ub(m, "scroll", f),
                Ub(m, "resize", f),
                Jv("sdl", "init", !1)));
          d = !1;
        },
        f = function () {
          b && Ry();
          c ? (d = !0) : ((c = m.setTimeout(e, a)), Jv("sdl", "pending", !0));
        };
      return f;
    },
    Vy = function () {
      var a = Ry(),
        b = a.Jf,
        c = a.Kf,
        d = (b / Sy.scrollWidth) * 100,
        e = (c / Sy.scrollHeight) * 100;
      Yy(b, "horiz.pix", "PIXELS", "horizontal");
      Yy(d, "horiz.pct", "PERCENT", "horizontal");
      Yy(c, "vert.pix", "PIXELS", "vertical");
      Yy(e, "vert.pct", "PERCENT", "vertical");
      Jv("sdl", "pending", !1);
    },
    Yy = function (a, b, c, d) {
      var e = Ty(b),
        f = {},
        g;
      for (g in e) {
        f.ac = g;
        if (e.hasOwnProperty(f.ac)) {
          var h = Number(f.ac);
          if (!(a < h)) {
            var l = {};
            tv(
              ((l.event = "gtm.scrollDepth"),
              (l["gtm.scrollThreshold"] = h),
              (l["gtm.scrollUnits"] = c.toLowerCase()),
              (l["gtm.scrollDirection"] = d),
              (l["gtm.triggers"] = e[f.ac].join(",")),
              l)
            );
            Kv(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.ac];
                  return p;
                };
              })(f),
              {}
            );
          }
        }
        f = { ac: f.ac };
      }
    },
    $y = function () {
      Kv(
        "sdl",
        "scr",
        function (a) {
          a || (a = H.scrollingElement || (H.body && H.body.parentNode));
          return (Sy = a);
        },
        !1
      );
      Kv(
        "sdl",
        "depth",
        function (a) {
          a || (a = Zy());
          return (Ry = a);
        },
        !1
      );
    },
    Zy = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Nh(),
          d = c.height;
        a = Math.max(Sy.scrollLeft + c.width, a);
        b = Math.max(Sy.scrollTop + d, b);
        return { Jf: a, Kf: b };
      };
    },
    Wy = function () {
      return !!(
        Object.keys(Ty("horiz.pix")).length ||
        Object.keys(Ty("horiz.pct")).length ||
        Object.keys(Ty("vert.pix")).length ||
        Object.keys(Ty("vert.pct")).length
      );
    };
  function az(a, b) {
    var c = this;
    L(F(this), ["options:!DustMap", "triggerId:?*"], arguments);
    gx([
      function () {
        return M(c, "process_dom_events", "window", "resize");
      },
      function () {
        return M(c, "process_dom_events", "window", "scroll");
      },
    ]);
    $y();
    if (!Sy) return;
    b = Mv(b);
    var d = rc(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        Uy(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        Uy(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        Uy(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        Uy(d.verticalThresholds, b, "vert.pct");
    }
    Lv("sdl", "init", !1)
      ? Lv("sdl", "pending", !1) ||
        I(function () {
          return Vy();
        })
      : (Jv("sdl", "init", !0),
        Jv("sdl", "pending", !0),
        I(function () {
          Vy();
          if (Wy()) {
            var e = Xy();
            Tb(m, "scroll", e);
            Tb(m, "resize", e);
          } else Jv("sdl", "init", !1);
        }));
    return b;
  }
  az.N = "internal.enableAutoEventOnScroll";
  var Gb = ca(["data-gtm-yt-inspected-"]),
    bz = ["www.youtube.com", "www.youtube-nocookie.com"],
    cz,
    dz = !1;
  var ez = function (a, b, c) {
      var d = a.map(function (g) {
        return { ya: g, Jd: g, Gd: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { ya: g * c, Jd: void 0, Gd: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, h) {
        return g.ya - h.ya;
      });
      return f;
    },
    fz = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    gz = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    hz = function (a, b) {
      var c, d;
      function e() {
        u = ew(
          function () {
            return {
              url: w,
              title: x,
              Lf: v,
              Mh: a.getCurrentTime(),
              playbackRate: y,
            };
          },
          b.kb,
          a.getIframe()
        );
        v = 0;
        x = w = "";
        y = 1;
        return f;
      }
      function f(D) {
        switch (D) {
          case 1:
            v = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var G = a.getVideoData();
              x = G ? G.title : "";
            }
            y = a.getPlaybackRate();
            b.Ef ? tv(u.createEvent("start")) : u.xc();
            t = ez(b.hg, b.gg, a.getDuration());
            return g(D);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        B = Ra().getTime();
        u.ei();
        r();
        return h;
      }
      function h(D) {
        var G;
        switch (D) {
          case 0:
            return n(D);
          case 2:
            G = "pause";
          case 3:
            var E = a.getCurrentTime() - A;
            G =
              1 < Math.abs(((Ra().getTime() - B) / 1e3) * y - E)
                ? "seek"
                : G || "buffering";
            a.getCurrentTime() && (b.Df ? tv(u.createEvent(G)) : u.xc());
            q();
            return l;
          case -1:
            return e(D);
          default:
            return h;
        }
      }
      function l(D) {
        switch (D) {
          case 0:
            return n(D);
          case 1:
            return g(D);
          case -1:
            return e(D);
          default:
            return l;
        }
      }
      function n() {
        for (; d; ) {
          var D = c;
          m.clearTimeout(d);
          D();
        }
        b.Cf && tv(u.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (m.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (t.length && 0 !== y) {
          var D = -1,
            G;
          do {
            G = t[0];
            if (G.ya > a.getDuration()) return;
            D = (G.ya - a.getCurrentTime()) / y;
            if (0 > D && (t.shift(), 0 === t.length)) return;
          } while (0 > D);
          c = function () {
            d = 0;
            c = p;
            0 < t.length &&
              t[0].ya === G.ya &&
              (t.shift(), tv(u.createEvent("progress", G.Gd, G.Jd)));
            r();
          };
          d = m.setTimeout(c, 1e3 * D);
        }
      }
      var u,
        t = [],
        v,
        w,
        x,
        y,
        A,
        B,
        C = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (D) {
          C = C(D);
        },
        onPlaybackRateChange: function (D) {
          A = a.getCurrentTime();
          B = Ra().getTime();
          u.xc();
          y = D;
          q();
          r();
        },
      };
    },
    jz = function (a) {
      I(function () {
        function b() {
          for (
            var d = c.getElementsByTagName("iframe"), e = d.length, f = 0;
            f < e;
            f++
          )
            iz(d[f], a);
        }
        var c = H;
        b();
        Uv(b);
      });
    },
    iz = function (a, b) {
      if (
        !a.getAttribute("data-gtm-yt-inspected-" + b.kb) &&
        (Fb(a, "data-gtm-yt-inspected-" + b.kb), kz(a, b.wd))
      ) {
        a.id || (a.id = lz());
        var c = m.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = hz(d, b),
          f = {},
          g;
        for (g in e)
          (f.Gc = g),
            e.hasOwnProperty(f.Gc) &&
              d.addEventListener(
                f.Gc,
                (function (h) {
                  return function (l) {
                    return e[h.Gc](l.data);
                  };
                })(f)
              ),
            (f = { Gc: f.Gc });
      }
    },
    kz = function (a, b) {
      var c = a.getAttribute("src");
      if (mz(c, "embed/")) {
        if (0 < c.indexOf("enablejsapi=1")) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf("?") ? "&" : "?";
          -1 < c.indexOf("origin=")
            ? (d = c + e + "enablejsapi=1")
            : (cz ||
                ((cz = H.location.protocol + "//" + H.location.hostname),
                H.location.port && (cz += ":" + H.location.port)),
              (d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(cz)));
          var f;
          f = sb(d);
          a.src = rb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    mz = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < bz.length; c++)
        if (0 <= a.indexOf("//" + bz[c] + "/" + b)) return !0;
      return !1;
    },
    lz = function () {
      var a = Math.round(1e9 * Math.random()) + "";
      return H.getElementById(a) ? lz() : a;
    };
  function nz(a, b) {
    var c = this;
    L(F(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
    gx([
      function () {
        return M(c, "process_dom_events", "element", "onStateChange");
      },
      function () {
        return M(c, "process_dom_events", "element", "onPlaybackRateChange");
      },
    ]);
    b = Mv(b);
    var d = !!a.get("captureStart"),
      e = !!a.get("captureComplete"),
      f = !!a.get("capturePause"),
      g = gz(rc(a.get("progressThresholdsPercent"))),
      h = fz(rc(a.get("progressThresholdsTimeInSeconds"))),
      l = !!a.get("fixMissingApi");
    if (!(d || e || f || g.length || h.length)) return;
    var n = { Ef: d, Cf: e, Df: f, gg: g, hg: h, wd: l, kb: b },
      p = m.YT,
      q = function () {
        jz(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = m.onYouTubeIframeAPIReady;
    m.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    I(function () {
      for (
        var u = H.getElementsByTagName("script"), t = u.length, v = 0;
        v < t;
        v++
      ) {
        var w = u[v].getAttribute("src");
        if (mz(w, "iframe_api") || mz(w, "player_api")) return b;
      }
      for (
        var x = H.getElementsByTagName("iframe"), y = x.length, A = 0;
        A < y;
        A++
      )
        if (!dz && kz(x[A], n.wd))
          return Pb("https://www.youtube.com/iframe_api"), (dz = !0), b;
    });
    return b;
  }
  nz.N = "internal.enableAutoEventOnYouTubeActivity";
  function oz(a, b) {
    var c = !1;
    L(F(this), ["booleanExpression:!string", "context:?DustMap"], arguments);
    var d = JSON.parse(a);
    if (!d) throw Error("Invalid boolean expression string was given.");
    var e = b ? rc(b) : {};
    c = pz(d, e);
    return c;
  }
  var qz = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (void 0 === a) return;
        a = a[b[c]];
      }
      return a;
    },
    rz = function (a, b) {
      if (1 === a.namespace_type) {
        var c = b.preHit;
        if (!c) return;
        var d = a.key_parts;
        if (!d || 0 === d.length) return;
        var e = d[0];
        switch (e) {
          case "hitData":
            return 2 > d.length ? void 0 : qz(c.getHitData(d[1]), d.slice(2));
          case "metadata":
            return 2 > d.length ? void 0 : qz(c.getMetadata(d[1]), d.slice(2));
          case "eventName":
            return c.getEventName();
          case "destinationId":
            return c.getDestinationId();
          default:
            throw Error(
              e +
                " is not a valid field that can be accessed\n                        from PreHit data."
            );
        }
      }
      throw Error(
        "Unknown Namespace Type used:\n                      " +
          a.namespace_type
      );
    },
    sz = function (a, b) {
      if (a) {
        if (void 0 !== a.context_value) return rz(a.context_value, b);
        if (void 0 !== a.boolean_expression_value)
          return pz(a.boolean_expression_value, b);
        if (void 0 !== a.boolean_value) return !!a.boolean_value;
        if (void 0 !== a.string_value) return String(a.string_value);
        if (void 0 !== a.integer_value) return Number(a.integer_value);
        if (void 0 !== a.double_value) return Number(a.double_value);
        throw Error(
          "Unknown field used for variable of type ExpressionValue:" + a
        );
      }
    },
    pz = function (a, b) {
      var c = a.args;
      if (!Da(c) || 0 === c.length)
        throw Error(
          'Invalid boolean expression format. Expected "args":' +
            c +
            " property to\n         be non-empty array."
        );
      var d = function (g) {
        return sz(g, b);
      };
      switch (a.type) {
        case 1:
          for (var e = 0; e < c.length; e++) if (d(c[e])) return !0;
          return !1;
        case 2:
          for (var f = 0; f < c.length; f++) if (!d(c[f])) return !1;
          return 0 < c.length;
        case 3:
          return !d(c[0]);
        case 4:
          return Uw(d(c[0]), d(c[1]), !1);
        case 5:
          return Xw(d(c[0]), d(c[1]));
        case 6:
          return bx(d(c[0]), d(c[1]));
        case 7:
          return Sw(d(c[0]), d(c[1]));
        case 8:
          return Ww(d(c[0]), d(c[1]));
        case 9:
          return ax(d(c[0]), d(c[1]));
        case 10:
          return Zw(d(c[0]), d(c[1]));
        case 11:
          return $w(d(c[0]), d(c[1]));
        case 12:
          return Yw(d(c[0]), d(c[1]));
        default:
          throw Error(
            'Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.'
          );
      }
    };
  oz.N = "internal.evaluateBooleanExpression";
  function tz(a) {
    return !1;
  }
  tz.N = "internal.evaluateFilteringRules";
  var uz;
  function vz(a) {
    var b = !1;
    return b;
  }
  vz.N = "internal.evaluateMatchingRules";
  var xz = function (a, b, c) {
      if (c)
        switch (c.type) {
          case "event_name":
            return a;
          case "const":
            return c.const_value;
          case "event_param":
            var d = c.event_param.param_name;
            return b[d];
        }
    },
    Az = function (a, b, c, d) {
      if (c && !yz(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++)
        if (zz(a, b, d[e].predicates || [])) return !0;
      return !1;
    },
    zz = function (a, b, c) {
      for (var d = 0; d < c.length; d++) if (!yz(a, b, c[d])) return !1;
      return !0;
    },
    yz = function (a, b, c) {
      var d = c.values || [],
        e = xz(a, b, d[0]),
        f = xz(a, b, d[1]),
        g = c.type;
      if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
        k(e) && (e = e.toLowerCase()), k(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case "eq":
        case "eqi":
          h = Xw(e, f);
          break;
        case "sw":
        case "swi":
          h = bx(e, f);
          break;
        case "ew":
        case "ewi":
          h = Sw(e, f);
          break;
        case "cn":
        case "cni":
          h = Ww(e, f);
          break;
        case "lt":
          h = ax(e, f);
          break;
        case "le":
          h = Zw(e, f);
          break;
        case "gt":
          h = $w(e, f);
          break;
        case "ge":
          h = Yw(e, f);
          break;
        case "re":
        case "rei":
          h = Uw(e, f, "rei" === g);
      }
      return !!c.negate !== h;
    };
  function Bz(a, b) {
    var c = !1;
    return c;
  }
  Bz.N = "internal.evaluatePredicates";
  var Cz = function (a) {
    var b;
    return b;
  };
  function Dz(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  Dz.O = "getCookieValues";
  function Ez() {
    return Gi.Hf;
  }
  Ez.N = "internal.getCountryCode";
  function Fz() {
    var a = [];
    a = Qj();
    return qc(a);
  }
  Fz.N = "internal.getDestinationIds";
  function Gz(a) {
    var b = null;
    return b;
  }
  Gz.O = "getElementById";
  function Hz(a, b) {
    var c;
    L(F(this), ["targetId:!string", "name:!string"], arguments);
    var d = Bh(a) || {};
    c = qc(d[b], this.h);
    return c;
  }
  Hz.N = "internal.getProductSettingsParameter";
  function Iz(a, b) {
    var c;
    L(F(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    M(this, "get_url", "query", a);
    var d = Zh(ai(m.location.href), "query"),
      e = Wh(d, a, b);
    c = qc(e, this.h);
    return c;
  }
  Iz.O = "getQueryParameters";
  function Jz(a, b) {
    var c;
    return c;
  }
  Jz.O = "getReferrerQueryParameters";
  function Kz(a) {
    var b = "";
    return b;
  }
  Kz.O = "getReferrerUrl";
  function Lz() {
    return Gi.bi;
  }
  Lz.N = "internal.getRegionCode";
  function Mz(a, b) {
    var c;
    L(F(this), ["targetId:!string", "name:!string"], arguments);
    var d = zu(su, a).fa;
    c = qc(d[b], this.h);
    return c;
  }
  Mz.N = "internal.getRemoteConfigParameter";
  function Nz(a) {
    var b = "";
    L(F(this), ["component:?string"], arguments),
      M(this, "get_url", a),
      (b = Zh(ai(m.location.href), a));
    return b;
  }
  Nz.O = "getUrl";
  function Oz() {
    M(this, "get_user_agent");
    return m.navigator.userAgent;
  }
  Oz.O = "getUserAgent";
  function Pz(a) {
    if (!a) return {};
    var b = a.Ej;
    return Fq(b.type, b.index, b.name);
  }
  function Qz(a) {
    return a ? { originatingEntity: Pz(a) } : {};
  }
  function Sz(a, b) {}
  Sz.O = "gtagSet";
  function Tz(a, b) {}
  Tz.O = "injectHiddenIframe";
  var Uz = {};
  function Wz(a, b, c, d) {}
  var Xz = Object.freeze({ dl: 1, id: 1 }),
    Yz = {};
  function Zz(a, b, c, d) {}
  Wz.O = "injectScript";
  Zz.N = "internal.injectScript";
  function $z(a) {
    var b = !0;
    return b;
  }
  $z.O = "isConsentGranted";
  var aA = function () {
    var a = Qf(function (b) {
      this.h.h.log("error", b);
    });
    a.O = "JSON";
    return a;
  };
  var bA = function () {
      return !1;
    },
    cA = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var dA = ["textContent", "value", "tagName", "children", "childElementCount"];
  function eA(a) {
    var b;
    return b;
  }
  eA.N = "internal.locateUserData";
  function fA() {}
  fA.O = "logToConsole";
  function gA(a) {
    var b = void 0;
    if ("function" === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            l = f[g][1];
          e.hasOwnProperty(h)
            ? "string" === typeof e[h]
              ? (e[h] = [e[h], l])
              : e[h].push(l)
            : (e[h] = l);
        }
        c = qc({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = ai(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var u = q[r].split("="),
          t = u[0],
          v = decodeURIComponent(u.splice(1).join("="));
        p.hasOwnProperty(t)
          ? "string" === typeof p[t]
            ? (p[t] = [p[t], v])
            : p[t].push(v)
          : (p[t] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = qc(n);
    return b;
  }
  gA.O = "parseUrl";
  function hA(a) {}
  hA.N = "internal.processAsNewEvent";
  function iA(a, b) {
    var c = !1;
    return c;
  }
  iA.O = "queryPermission";
  function jA() {
    var a = "";
    return a;
  }
  jA.O = "readCharacterSet";
  function kA() {
    var a = "";
    return a;
  }
  kA.O = "readTitle";
  function lA(a, b) {
    var c = this;
    L(F(this), ["destinationId:!string", "callback:!Fn"], arguments),
      Sm(a, function (d) {
        b.h(c.h, qc(d, c.h, 1));
      });
  }
  lA.N = "internal.registerCcdCallback";
  var mA = Object.freeze(["config", "event", "get", "set"]);
  function nA(a, b, c) {}
  nA.N = "internal.registerGtagCommandListener";
  function oA(a, b) {
    var c = !1;
    return c;
  }
  oA.N = "internal.removeDataLayerEventListener";
  function pA() {}
  pA.O = "resetDataLayer";
  var qA = function (a, b, c, d, e) {
    e = void 0 === e ? {} : e;
    Mm.call(this, a, b, d);
    this.s = c;
    this.Fb = d.wa;
    this.K = d.Ba;
    this.H = e;
  };
  ma(qA, Mm);
  qA.prototype.h = function (a) {
    if (void 0 !== this.Fb[a]) return this.Fb[a];
    if (void 0 !== R(this.B, a)) return R(this.B, a);
    if (void 0 !== this.H[a]) return this.H[a];
  };
  qA.prototype.D = function (a) {
    return void 0 !== this.B.fa[a] ? this.B.fa[a] : this.H[a];
  };
  qA.prototype.abort = function () {
    throw "ABORT";
  };
  var rA = function (a) {
      var b = !1;
      return b;
    },
    sA = function (a) {
      if (a.metadata.is_merchant_center) return !1;
      var b = R(a.B, Q.g.he);
      return !((!0 !== b && "true" !== b) || !R(a.B, Q.g.la));
    },
    tA = function (a) {
      var b = a.metadata.user_data;
      if (pc(b)) return b;
    },
    uA = function (a, b) {
      var c = Om(a, Q.g.ee, a.B.fa[Q.g.ee]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    };
  var vA = !1,
    wA = function (a) {
      var b = a.eventName === Q.g.Oc && Wi() && sA(a),
        c = a.metadata.is_conversion,
        d = a.metadata.is_session_start,
        e = a.metadata.create_dc_join,
        f = a.metadata.create_google_join,
        g = a.metadata.euid_mode_enabled && !!tA(a);
      return !(!Ib.sendBeacon || c || g || d || e || f || b || vA);
    };
  var xA = function (a) {
    jg("GA4_EVENT", a);
  };
  var zA = function (a) {
      return !a || yA.test(a) || Og.hasOwnProperty(a);
    },
    AA = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = xz(a, b, f.edit_param.param_value),
            l;
          if (h) {
            var n = Number(h);
            l = isNaN(n) ? h : n;
          } else l = h;
          b[g] = l;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    yA = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var BA = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Sa();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Uf() && (d = Sa() - b);
          return d + c;
        },
      };
    },
    CA = function () {
      this.h = void 0;
      this.s = 0;
      this.isActive = this.isVisible = this.D = !1;
      this.K = this.H = void 0;
    };
  aa = CA.prototype;
  aa.bj = function (a) {
    var b = this;
    if (!this.h) {
      this.D = H.hasFocus();
      this.isVisible = !H.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Tb(d, e, function (g) {
          b.h.stop();
          f(g);
          b.Uf() && b.h.start();
        });
      };
      c(m, "focus", function () {
        b.D = !0;
      });
      c(m, "blur", function () {
        b.D = !1;
      });
      c(m, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && N(56);
        b.K && b.K();
      });
      c(m, "pagehide", function () {
        b.isActive = !1;
        b.H && b.H();
      });
      c(H, "visibilitychange", function () {
        b.isVisible = !H.hidden;
      });
      sA(a) &&
        -1 === (Ib.userAgent || "").indexOf("Firefox") &&
        -1 === (Ib.userAgent || "").indexOf("FxiOS") &&
        c(m, "beforeunload", function () {
          vA = !0;
        });
      this.jg();
      this.s = 0;
    }
  };
  aa.jg = function () {
    this.s += this.Le();
    this.h = BA(this);
    this.Uf() && this.h.start();
  };
  aa.Qk = function (a) {
    var b = this.Le();
    0 < b && (a.C[Q.g.de] = b);
  };
  aa.Sj = function (a) {
    a.C[Q.g.de] = void 0;
    this.jg();
    this.s = 0;
  };
  aa.Uf = function () {
    return this.D && this.isVisible && this.isActive;
  };
  aa.Pj = function () {
    return this.s + this.Le();
  };
  aa.Le = function () {
    return (this.h && this.h.get()) || 0;
  };
  aa.Bk = function (a) {
    this.H = a;
  };
  aa.ci = function (a) {
    this.K = a;
  };
  function DA() {
    var a = m;
    return (a.gaGlobal = a.gaGlobal || {});
  }
  var EA = function () {
      var a = DA();
      a.hid = a.hid || Ha();
      return a.hid;
    },
    FA = function (a, b) {
      var c = DA();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var GA = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d)
        (a.C[Q.g.Ab] = b), (a.metadata.client_id_source = c);
    },
    JA = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + "_ga",
        f = Ik(d, void 0, void 0, Q.g.X);
      if (!1 === R(b.B, Q.g.Kb) && HA(b) === a) c = !0;
      else {
        var g = Lj(a, IA[0], d.domain, d.path);
        c = 1 !== Dj(e, g, f);
      }
      return c;
    },
    HA = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = Kj(c, b.domain, b.path, IA, Q.g.X);
      if (!d) {
        var e = R(a.B, Q.g.Xc);
        void 0 === e && (e = "");
        var f = String(e);
        f && f != c && (d = Kj(f, b.domain, b.path, IA, Q.g.X));
      }
      return d;
    },
    IA = ["GA1"];
  var MA = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = KA(a);
      if (!d) return b;
      var e,
        f = Na(null != (e = c.h(Q.g.gd)) ? e : 30);
      if (!(c.s > d.Cd + 60 * f)) return a;
      var g = KA(b);
      if (!g) return a;
      g.Cc = d.Cc + 1;
      var h;
      return null != (h = LA(g.sessionId, g.Cc, g.Kd, g.Cd, g.Vf, g.Wb, g.rd))
        ? h
        : b;
    },
    PA = function (a, b) {
      var c = b.metadata.cookie_options,
        d = NA(b, c),
        e = Lj(a, OA[0], c.domain, c.path);
      return (
        1 !==
        Dj(d, e, {
          jb: Q.g.X,
          domain: c.domain,
          path: c.path,
          expires: c.ib ? new Date(Sa() + 1e3 * c.ib) : void 0,
          flags: c.flags,
        })
      );
    },
    QA = function (a) {
      var b = a.metadata.cookie_options;
      return Kj(NA(a, b), b.domain, b.path, OA, Q.g.X);
    },
    LA = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Na(c), d, e];
        h.push(f ? "1" : "0");
        h.push(g || "0");
        return h.join(".");
      }
    },
    OA = ["GS1"],
    NA = function (a, b) {
      return b.prefix + "_ga_" + a.target.J[0];
    },
    KA = function (a) {
      if (a) {
        var b = a.split(".");
        if (!(5 > b.length || 7 < b.length))
          return (
            7 > b.length && N(67),
            {
              sessionId: b[0],
              Cc: Number(b[1]),
              Kd: !!Number(b[2]),
              Cd: Number(b[3]),
              Vf: Number(b[4] || 0),
              Wb: "1" === b[5],
              rd: "0" !== b[6] ? b[6] : void 0,
            }
          );
      }
    },
    RA = function (a) {
      return LA(
        a.C[Q.g.Ob],
        a.C[Q.g.lf],
        a.C[Q.g.jf],
        a.s,
        a.metadata.join_timer_sec || 0,
        !!a.metadata[Q.g.bf],
        a.C[Q.g.bd]
      );
    };
  var SA = function (a) {
      var b = a.h(Q.g.Aa),
        c = a.D(Q.g.Aa);
      if (c === b) return c;
      var d = K(b);
      c && c[Q.g.Z] && (d[Q.g.Z] = (d[Q.g.Z] || []).concat(c[Q.g.Z]));
      return d;
    },
    TA = function (a, b) {
      var c = nl(!0);
      return "1" !== c._up ? {} : { clientId: c[a], gi: c[b] };
    },
    UA = function (a, b, c) {
      var d = nl(!0),
        e = d[b];
      e && (GA(a, e, 2), JA(e, a));
      var f = d[c];
      f && PA(f, a);
      return !(!e || !f);
    },
    VA = !1,
    WA = function (a) {
      var b = SA(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + "_ga",
        e = NA(a, c);
      Ml(b[Q.g.nc], !!b[Q.g.Z]) && UA(a, d, e) && (VA = !0);
      b[Q.g.Z] &&
        tl(
          function () {
            var f = {},
              g = HA(a);
            g && (f[d] = g);
            var h = QA(a);
            h && (f[e] = h);
            var l = uj("FPLC", void 0, void 0, Q.g.X);
            l.length && (f._fplc = l[0]);
            return f;
          },
          b[Q.g.Z],
          b[Q.g.fd],
          !!b[Q.g.oc]
        );
    },
    YA = function (a) {
      if (!a.h(Q.g.tb)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = NA(a, b);
      Kl(function () {
        var e;
        if (ij("analytics_storage")) e = {};
        else {
          var f = {};
          e = ((f._up = "1"), (f[c] = a.C[Q.g.Ab]), (f[d] = RA(a)), f);
        }
        return e;
      }, 1);
      return !ij("analytics_storage") && XA() ? TA(c, d) : {};
    },
    XA = function () {
      var a = Yh(m.location, "host"),
        b = Yh(ai(H.referrer), "host");
      return a && b
        ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a)
          ? !0
          : !1
        : !1;
    },
    ZA = function (a) {
      if (!a) return a;
      var b = String(a);
      b = ml(b);
      return (b = ml(b, "_ga"));
    };
  var $A = function () {
    var a = Sa(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Sa();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var aB = function (a) {
      return Zh(ai(a.C[Q.g.eb]), "host", !0);
    },
    bB = !1;
  bB = !0;
  var cB = "" + Ha(),
    dB = !1,
    eB = void 0;
  var fB = function (a, b) {
      if (sA(b)) {
        var c = Zo();
        c && (a.us_privacy = c);
        var d = Gk();
        d && (a.gdpr = d);
        var e = Fk();
        e && (a.gdpr_consent = e);
      }
    },
    gB = function (a, b) {
      if (Wi()) {
        a.gcs = jj();
        var c = b.metadata.is_consent_update;
        c && (a.gcu = "1");
        if (sA(b)) {
          Xi() && (a.gcd = "G1" + dj(Ui));
          var d = b.h(Q.g.oa);
          a.adr = void 0 !== d && !1 !== d ? "1" : "0";
          c && (a.gcut = Wg[b.metadata.consent_update_type || ""]);
        }
      }
    },
    hB = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) hB(a + "." + d, b[d], c);
      else c[a] = b;
      return c;
    },
    kB = function (a) {
      if (a.metadata.is_merchant_center)
        return "https://www.merchant-center-analytics.goog/mc/collect";
      var b = dq(a.h(Q.g.la), "/g/collect");
      if (b) return b;
      var c = Om(a, Q.g.Bb, a.h(Q.g.Bb));
      return c &&
        !Om(a, Q.g.ed, !1) &&
        !1 !== a.h(Q.g.Qc) &&
        Ws() &&
        ij(Q.g.I) &&
        ij(Q.g.X)
        ? iB()
        : jB();
    },
    lB = "",
    mB = !1;
  mB = !0;
  var nB = {};
  nB[Q.g.Yi] = "tid";
  nB[Q.g.Ab] = "cid";
  nB[Q.g.Sa] = "ul";
  nB[Q.g.cf] = "_fid";
  nB[Q.g.nf] = "tt";
  nB[Q.g.ne] = "ir";
  nB[Q.g.Mb] = "sr";
  nB[Q.g.mc] = "gdid";
  nB[Q.g.oe] = "_rdi";
  nB[Q.g.Rg] = "_geo";
  nB[Q.g.vh] = "gtm_up";
  nB[Q.g.uh] = "_glv";
  var oB = {};
  oB[Q.g.Ob] = "sid";
  oB[Q.g.lf] = "sct";
  oB[Q.g.jf] = "seg";
  oB[Q.g.Ta] = "dl";
  oB[Q.g.eb] = "dr";
  oB[Q.g.sc] = "dt";
  oB[Q.g.xa] = "cu";
  oB[Q.g.Ha] = "uid";
  oB[Q.g.Xd] = "cc";
  oB[Q.g.Yd] = "ci";
  oB[Q.g.Zd] = "cm";
  oB[Q.g.ae] = "cn";
  oB[Q.g.be] = "cs";
  oB[Q.g.ce] = "ck";
  var pB = {};
  pB[Q.g.de] = "_et";
  pB[Q.g.kc] = "edid";
  var qB = {};
  qB[Q.g.Xd] = "cc";
  qB[Q.g.Yd] = "ci";
  qB[Q.g.Zd] = "cm";
  qB[Q.g.ae] = "cn";
  qB[Q.g.be] = "cs";
  qB[Q.g.ce] = "ck";
  var jB = function () {
      var a = "www";
      mB && lB && (a = lB);
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    iB = function () {
      var a;
      mB && lB && (a = lB);
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    rB = function (a, b, c) {
      function d(x, y) {
        if (void 0 !== y && !Lg.hasOwnProperty(x)) {
          null === y && (y = "");
          var A;
          x !== Q.g.bd
            ? (A = !1)
            : a.metadata.euid_mode_enabled
            ? ((e.ecid = y), (A = !0))
            : (A = void 0);
          if (!A && x !== Q.g.bf) {
            var B = y;
            !0 === y && (B = "1");
            !1 === y && (B = "0");
            var C;
            if (nB[x]) (C = nB[x]), (e[C] = We(B, 420));
            else if (oB[x]) (C = oB[x]), (g[C] = We(B, 420));
            else if (pB[x]) (C = pB[x]), (f[C] = We(B, 420));
            else if ("_" === x.charAt(0)) e[x] = We(B, 420);
            else {
              var D;
              (D = r(x, y)) ||
                (qB[x]
                  ? (D = !0)
                  : x !== Q.g.Vc
                  ? (D = !1)
                  : ("object" !== typeof y && q(x, y), (D = !0)));
              D || q(x, y);
            }
          }
        }
      }
      var e = {},
        f = {},
        g = {};
      e.v = "2";
      e.tid = a.target.U;
      e.gtm = ak();
      e._p = EA();
      c && (e.em = c);
      a.metadata.create_google_join && (e._gaz = 1);
      gB(e, a);
      fB(e, a);
      var h = a.C[Q.g.mc];
      h && (e.gdid = h);
      f.en = We(a.eventName, 40);
      a.metadata.is_first_visit &&
        (f._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (f._nsi = 1);
      a.metadata.is_session_start &&
        (f._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (f._c = 1);
      a.metadata.is_external_event && (f._ee = 1);
      if (a.metadata.is_ecommerce) {
        var l = a.C[Q.g.ja] || a.h(Q.g.ja);
        if (Da(l))
          for (var n = 0; n < l.length && 200 > n; n++)
            f["pr" + (n + 1)] = af(l[n]);
      }
      var p = a.C[Q.g.kc];
      p && (f.edid = p);
      for (
        var q = function (x, y) {
            x = We(x, 40);
            var A = "ep." + x,
              B = "epn." + x;
            x = Ca(y) ? B : A;
            var C = Ca(y) ? A : B;
            f.hasOwnProperty(C) && delete f[C];
            f[x] = We(y, 100);
          },
          r = function (x, y) {
            var A = x.split(".");
            if (x === Q.g.Ga && "object" !== typeof y) return q(x, y), !0;
            if (A[0] === Q.g.Ga) {
              if ((1 < A.length || "object" === typeof y) && sA(a)) {
                var B = hB(x, y);
                La(B, function (C, D) {
                  return void q(C, D);
                });
              }
              return !0;
            }
            return !1;
          },
          u = 0;
        u < Mg.length;
        ++u
      ) {
        var t = Mg[u];
        d(t, a.h(t));
      }
      La(a.C, d);
      a.metadata.user_data && r("user_data", a.metadata.user_data);
      var v = a.C[Q.g.Ua] || a.h(Q.g.Ua) || {};
      (!1 !== a.h(Q.g.ia) && Xs()) || (v._npa = "1");
      La(v, function (x, y) {
        if (void 0 !== y)
          if ((null === y && (y = ""), x === Q.g.Ha && !g.uid))
            g.uid = We(y, 36);
          else if (b[x] !== y) {
            var A = (Ca(y) ? "upn." : "up.") + We(x, 24);
            f[A] = We(y, 36);
            b[x] = y;
          }
      });
      var w = !1;
      return cf.call(this, { Ja: e, Yb: g, Fb: f }, kB(a), sA(a), w) || this;
    };
  ma(rB, cf);
  var sB = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    tB = function (a) {
      var b = a.search;
      return (
        a.protocol +
        "//" +
        a.hostname +
        a.pathname +
        (b ? b + "&richsstsse" : "?richsstsse")
      );
    },
    uB = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    vB = function (a, b) {
      var c = new m.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = ai(a),
        h = uB(g),
        l = tB(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = sB(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
            var r;
            a: {
              var u,
                t = p.substring(0, q).split("\n"),
                v =
                  "undefined" != typeof Symbol &&
                  Symbol.iterator &&
                  t[Symbol.iterator];
              u = v ? v.call(t) : { next: ba(t) };
              var w = u.next().value,
                x = u.next().value;
              if (w.startsWith("event: message") && x.startsWith("data: "))
                try {
                  r = JSON.parse(x.substring(x.indexOf(":") + 1));
                  break a;
                } catch (B) {}
              r = void 0;
            }
            if (r) {
              var y = r.send_pixel || [];
              if (Array.isArray(y)) for (var A = 0; A < y.length; A++) Sb(y[A]);
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n");
          }
          e = p;
        }
      };
      c.open(d, l);
      c.send(b);
    };
  var yB = function (a, b, c, d) {
      var e = a + "?" + b;
      wB && (d = !(0 === e.indexOf(jB()) || 0 === e.indexOf(iB())));
      d && !vA ? vB(e, c) : xB(a, b, c);
    },
    zB = function (a) {},
    AB = function (a, b) {
      function c(u) {
        q.push(u + "=" + encodeURIComponent("" + a.Ja[u]));
      }
      var d = b.Hk,
        e = b.Ik,
        f = b.Rj,
        g = b.rj,
        h = b.qj,
        l = b.Xj,
        n = b.Jk,
        p = b.Wj;
      if (d || e || n) {
        var q = [];
        c("tid");
        c("cid");
        c("gtm");
        q.push("aip=1");
        a.Yb.uid && !p && q.push("uid=" + encodeURIComponent("" + a.Yb.uid));
        d &&
          (xB(
            "https://stats.g.doubleclick.net/g/collect",
            "v=2&" + q.join("&")
          ),
          cj("https://stats.g.doubleclick.net/g/collect?v=2&" + q.join("&")));
        if (e) {
          q.push("z=" + Ha());
          if (!l) {
            var r =
              f && 0 === f.indexOf("google.") && "google.com" != f
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace(
                    "%",
                    f
                  )
                : void 0;
            r && Sb(r + q.join("&"));
          }
        }
        n && zB(a);
      }
    },
    wB = !1;
  var BB = function () {
    this.H = 1;
    this.K = {};
    this.h = new df();
    this.s = -1;
  };
  BB.prototype.D = function (a, b) {
    var c = this,
      d;
    try {
      d = new rB(a, this.K, b);
    } catch (v) {
      a.abort();
    }
    var e = wA(a);
    (e && this.h.H(d)) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.s) {
        var f = m,
          g = f.setTimeout,
          h;
        sA(a) ? (CB ? ((CB = !1), (h = DB)) : (h = EB)) : (h = 5e3);
        this.s = g.call(
          f,
          function () {
            return c.flush();
          },
          h
        );
      }
    } else {
      var l = ff(d, this.H++);
      yB(d.h, l.eg, l.body, d.H);
      var n = a.metadata.create_dc_join,
        p = a.metadata.create_google_join,
        q = !1 !== a.h(Q.g.Ea),
        r = !1 !== a.h(Q.g.ia),
        u = { eventId: a.B.eventId, priorityId: a.B.priorityId },
        t = {
          Hk: n,
          Ik: p,
          Rj: String(Om(a, Q.g.ke, a.h(Q.g.ke))),
          rj: q,
          qj: r,
          Xj: Om(a, Q.g.ed, !1),
          Wj: a.metadata.euid_mode_enabled,
          bl: u,
        };
      AB(d, t);
    }
  };
  BB.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !vA ? this.aa(a) : this.D(a);
  };
  BB.prototype.flush = function () {
    if (this.h.events.length) {
      var a = gf(this.h, this.H++);
      yB(this.h.h, a.eg, a.body, this.h.s);
      this.h = new df();
      0 <= this.s && (m.clearTimeout(this.s), (this.s = -1));
    }
  };
  BB.prototype.aa = function (a) {
    var b = this,
      c = tA(a);
    c
      ? Ig(c, function (d) {
          b.D(a, 1 === d.split("~").length ? void 0 : d);
        })
      : this.D(a);
  };
  var xB = function (a, b, c) {
      var d = a + "?" + b;
      c ? Ib.sendBeacon && Ib.sendBeacon(d, c) : Zb(d);
    },
    DB = bk("", 500),
    EB = bk("", 5e3),
    CB = !0;
  var FB = window,
    GB = document,
    HB = function (a) {
      var b = FB._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === FB["ga-disable-" + a]))
        return !0;
      try {
        var c = FB.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = oj("AMP_TOKEN", String(GB.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return GB.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var IB = {};
  var JB = function (a, b, c) {
      c || (c = function () {});
      var d = function (e) {
        void 0 !== e[b] && (e[b] = c(e[b]));
      };
      d(a.C);
      d(a.Fb);
      d(a.K);
      d(a.B.vb);
    },
    KB = function (a, b) {
      var c = Q.g.I;
      ij(c) ||
        lj(function () {
          b.metadata.is_consent_update = !0;
          b.metadata.consent_update_type = c;
          a.Fh(b);
        }, c);
    },
    LB = function (a) {
      if (!pc(a)) return !1;
      var b = a.mode;
      return (
        "auto_detect" === b ||
        "selectors" === b ||
        "code" === b ||
        !!a.enable_code
      );
    },
    MB = {
      0: !0,
      9: !0,
      6: !0,
      5: !0,
      10: !0,
      3: !0,
      2: !0,
      8: !0,
      11: !0,
      12: !0,
      1: !0,
    },
    NB = !1;
  IB.Zi = "";
  var OB = {},
    PB =
      ((OB[Q.g.Xd] = !0),
      (OB[Q.g.Yd] = !0),
      (OB[Q.g.Zd] = !0),
      (OB[Q.g.ae] = !0),
      (OB[Q.g.be] = !0),
      (OB[Q.g.ce] = !0),
      OB),
    QB = function (a) {
      this.aa = a;
      this.ab = new BB();
      this.s = void 0;
      this.H = new CA();
      this.D = this.h = void 0;
      this.K = !1;
      this.yg = void 0;
    };
  aa = QB.prototype;
  aa.wk = function (a, b, c) {
    var d = this,
      e = wm(this.aa);
    if (e)
      if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.V();
      else {
        a !== Q.g.Da && a !== Q.g.Ma && zA(a) && N(58);
        RB(c.wa);
        var f = new qA(e, a, b, c),
          g = [Q.g.X];
        (Om(f, Q.g.Bb, f.h(Q.g.Bb)) || sA(f)) && g.push(Q.g.I);
        mj(function () {
          d.xk(f);
        }, g);
      }
    else c.V();
  };
  aa.xk = function (a) {
    this.D = a;
    try {
      HB(a.target.U) && (N(28), a.abort());
      0 <= IB.Zi.replace(/\s+/g, "").split(",").indexOf(a.eventName) &&
        (N(33), a.abort());
      var b = uA(a);
      b && b.blacklisted && (N(34), a.abort());
      var c = H.location.protocol;
      // "http:" != c && "https:" != c && (N(29), a.abort());
      Ib && "preview" == Ib.loadPurpose && (N(30), a.abort());
      var d = $g.grl;
      d || ((d = $A()), ($g.grl = d));
      d() || (N(35), a.abort());
      if (a.R) {
        a.B.V();
        kg();
        return;
      }
      SB(a);
      TB(a);
      this.cj(a);
      this.H.Qk(a);
      a.metadata.is_merchant_center || a.h(Q.g.eh)
        ? (a.metadata.euid_mode_enabled = !1)
        : (a.metadata.euid_mode_enabled = LB(a.D(Q.g.vc)));
      if (a.metadata.euid_mode_enabled) {
        var e = a.D(Q.g.vc);
        if (LB(e)) {
          var f = R(a.B, Q.g.Ga);
          if (void 0 !== f) (a.metadata.user_data = f), (a.C._udm = "c");
          else {
            var g = vi(e);
            a.metadata.user_data = g;
            if ("selectors" === e.mode || pc(e.selectors)) a.C._udm = "s";
            else if ("auto_detect" === e.mode || pc(e.auto_detect))
              a.C._udm = "a";
          }
        }
      }
      var h = this.ai,
        l;
      a.h(Q.g.tb) && (ij(Q.g.X) || R(a.B, Q.g.Ab) || (a.C[Q.g.vh] = !0));
      var n;
      var p;
      p = void 0 === p ? 3 : p;
      var q = m.location.href;
      if (q) {
        var r = ai(q).search.replace("?", ""),
          u = Wh(r, "_gl", !1, !0) || "";
        n = u ? void 0 !== ol(u, p) : !1;
      } else n = !1;
      n && sA(a) && (a.C[Q.g.uh] = !0);
      a.eventName === Q.g.Da
        ? (a.h(Q.g.tb) && lm(["aw", "dc"]), WA(a), (l = YA(a)))
        : (l = {});
      h.call(this, l);
      if (a.eventName == Q.g.Da) {
        var t = R(a.B, Q.g.Fa);
        void 0 === t && (t = !0);
        t || a.abort();
        a.B.wa[Q.g.ka] &&
          ((a.B.Ba[Q.g.ka] = a.B.wa[Q.g.ka]),
          (a.B.wa[Q.g.ka] = void 0),
          (a.C[Q.g.ka] = void 0));
        a.eventName = Q.g.Oc;
      }
      var v = cb(rp(a.B, Q.g.ka, 1), ".");
      v && (a.C[Q.g.mc] = v);
      var w = cb(rp(a.B, Q.g.ka, 2), ".");
      w && (a.C[Q.g.kc] = w);
      var x = this.s,
        y = this.h,
        A = this.H,
        B = QA(a);
      B || (B = y);
      var C = R(a.B, Q.g.gd);
      void 0 === C && (C = 30);
      var D = Na(C),
        G = R(a.B, Q.g.kf);
      void 0 === G && (G = 1e4);
      var E = Na(G),
        J = KA(B);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      J &&
        J.Vf &&
        (a.metadata.join_timer_sec = Math.max(
          0,
          J.Vf - Math.max(0, a.s - J.Cd)
        ));
      var P = !1;
      J ||
        ((P = a.metadata.is_first_visit = !0),
        (J = {
          sessionId: String(a.s),
          Cc: 1,
          Kd: !1,
          Cd: a.s,
          Wb: !1,
          rd: void 0,
        }));
      a.s > J.Cd + 60 * D &&
        ((P = !0),
        (J.sessionId = String(a.s)),
        J.Cc++,
        (J.Kd = !1),
        (J.rd = void 0));
      if (P) (a.metadata.is_session_start = !0), A.Sj(a);
      else if (A.Pj() > E || a.eventName == Q.g.Oc) J.Kd = !0;
      a.metadata.euid_mode_enabled
        ? a.h(Q.g.Ha)
          ? (J.Wb = !0)
          : (J.Wb && (J.rd = void 0), (J.Wb = !1))
        : (J.Wb = !1);
      var Y = J.rd;
      if (a.metadata.euid_mode_enabled) {
        var ja = a.h(Q.g.bd),
          U = ja ? 1 : 8;
        ja || ((ja = Y), (U = 4));
        ja || ((ja = Gj()), (U = 7));
        var O = U,
          ea = a.metadata.enhanced_client_id_source;
        if (void 0 === ea || O <= ea)
          (a.C[Q.g.bd] = ja.toString()),
            (a.metadata.enhanced_client_id_source = O);
      }
      Nm(a, Q.g.Ob, J.sessionId);
      Nm(a, Q.g.lf, J.Cc);
      Nm(a, Q.g.jf, J.Kd ? 1 : 0);
      a.metadata[Q.g.bf] = J.Wb ? 1 : 0;
      var W = a.h(Q.g.Ab),
        S = W ? 1 : 8;
      a.metadata.is_new_to_site = !1;
      W || ((W = HA(a)), (S = 3));
      W || ((W = x), (S = 5));
      if (!W) {
        var Fa = ij(Q.g.X),
          Ya = DA();
        W = !Ya.from_cookie || Fa ? Ya.vid : void 0;
        S = 6;
      }
      W
        ? (W = "" + W)
        : ((W = Hj()),
          (S = 7),
          (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0));
      GA(a, W, S);
      UB(a);
      var Ea = "",
        Ia = H.location;
      if (Ia) {
        var Za = Ia.pathname || "";
        "/" != Za.charAt(0) && (Za = "/" + Za);
        Ea = Ia.protocol + "//" + Ia.hostname + Za + Ia.search;
      }
      Nm(a, Q.g.Ta, Ea);
      var Gd = Q.g.eb,
        nc;
      a: {
        var xe = uj("_opt_expid", void 0, void 0, Q.g.X)[0];
        if (xe) {
          var wt = decodeURIComponent(xe).split("$");
          if (3 === wt.length) {
            nc = wt[2];
            break a;
          }
        }
        if (void 0 !== $g.ga4_referrer_override) nc = $g.ga4_referrer_override;
        else {
          var xt = sh("gtm.gtagReferrer." + a.target.U);
          nc = xt ? "" + xt : H.referrer;
        }
      }
      Nm(a, Gd, nc || void 0);
      Nm(a, Q.g.sc, H.title);
      Nm(a, Q.g.Sa, (Ib.language || "").toLowerCase());
      var yt = Ch();
      Nm(a, Q.g.Mb, yt.width + "x" + yt.height);
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (
        !a.metadata.is_merchant_center &&
        !1 !== a.h(Q.g.Qc) &&
        Ws() &&
        ij(Q.g.I)
      ) {
        var Eh = Om(a, Q.g.Bb, a.h(Q.g.Bb));
        if (a.metadata.is_session_start || a.h(Q.g.df)) {
          a.metadata.create_dc_join = !!Eh;
        }
        var zt;
        zt = a.metadata.join_timer_sec;
        Eh &&
          0 === (zt || 0) &&
          ((a.metadata.join_timer_sec = 60),
          (a.metadata.create_google_join = !0));
      }
      VB(a);
      Qg.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0), Nm(a, Q.g.ja), Nm(a, Q.g.xa));
      Nm(a, Q.g.nf);
      for (var At = a.h(Q.g.ef) || [], ul = 0; ul < At.length; ul++) {
        var Bt = At[ul];
        if (Bt.rule_result) {
          Nm(a, Q.g.nf, Bt.traffic_type);
          xA(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && a.h(Q.g.la)) {
        var Ct = SA(a) || {},
          tD =
            (Ml(Ct[Q.g.nc], !!Ct[Q.g.Z]) ? nl(!0)._fplc : void 0) ||
            (0 < uj("FPLC", void 0, void 0, Q.g.X).length ? void 0 : "0");
        a.C._fplc = tD;
      }
      if (void 0 !== a.h(Q.g.ne)) Nm(a, Q.g.ne);
      else {
        var Dt = a.h(Q.g.pe),
          vl,
          Fh;
        a: {
          if (VA) {
            var wl = SA(a) || {};
            if (wl && wl[Q.g.Z])
              for (var Et = aB(a), Gh = wl[Q.g.Z], Cf = 0; Cf < Gh.length; Cf++)
                if (Gh[Cf] instanceof RegExp) {
                  if (Gh[Cf].test(Et)) {
                    Fh = !0;
                    break a;
                  }
                } else if (0 <= Et.indexOf(Gh[Cf])) {
                  Fh = !0;
                  break a;
                }
          }
          Fh = !1;
        }
        var Hh;
        if (!(Hh = Fh))
          if (bB) Hh = !1;
          else {
            var uD = aB(a),
              Ih;
            var Jh = a.metadata.cookie_options,
              xl = Jh.domain;
            if ("none" !== xl)
              if ("auto" !== xl) Ih = xl;
              else {
                if (!dB) {
                  for (var Df = Aj(), ye = 0; ye < Df.length; ye++)
                    if ("none" !== Df[ye]) {
                      var Ft = Jh.prefix + "_ga_autodomain";
                      if (
                        0 ===
                        Dj(Ft, cB, { jb: Q.g.X, domain: Df[ye], path: Jh.path })
                      ) {
                        Dj(Ft, void 0, {
                          jb: Q.g.X,
                          domain: Df[ye],
                          path: Jh.path,
                        });
                        eB = Df[ye];
                        break;
                      }
                    }
                  dB = !0;
                }
                Ih = eB;
              }
            else Ih = void 0;
            var Gt = Ih;
            Hh = Gt ? 0 <= uD.indexOf(Gt) : !1;
          }
        if (!(vl = Hh)) {
          var Kh;
          if ((Kh = Dt))
            a: {
              for (
                var Ht = Dt.include_conditions || [], vD = aB(a), yl = 0;
                yl < Ht.length;
                yl++
              )
                if (Ht[yl].test(vD)) {
                  Kh = !0;
                  break a;
                }
              Kh = !1;
            }
          vl = Kh;
        }
        vl && ((a.C[Q.g.ne] = "1"), xA(4));
      }
      sA(a) &&
        (hg[17] && (gq() || (a.C._uc = Gi.Hf)), Wi() && (a.C._rnd = Mj()));
      if (hg[25])
        if (Eo) {
          N(85);
          var It = Co();
          It ? a.h(Q.g.oe) || Go(It, a, !0) : N(86);
        } else N(87);
      if (a.eventName == Q.g.Ma) {
        var Jt = a.h(Q.g.cb),
          wD = a.h(Q.g.sb),
          Kt = void 0;
        Kt = a.C[Jt];
        wD(Kt || a.h(Jt));
        a.abort();
      }
      if (!a.B.eventMetadata.syn_or_mod) {
        var zl = a.h(Q.g.af);
        if (zl) {
          var ed = K(a.Fb);
          K(a.C, ed);
          for (
            var Lt = zl.edit_rules || [], Mt = !1, Al = 0;
            Al < Lt.length;
            Al++
          ) {
            var Lh;
            a: {
              var Ec = a,
                Hd = Lt[Al];
              if (
                Az(
                  Ec.eventName,
                  ed,
                  Hd.event_name_predicate,
                  Hd.conditions || []
                )
              ) {
                if (Hd.new_event_name) {
                  var Nt = k(Hd.new_event_name)
                    ? String(Hd.new_event_name)
                    : xz(Ec.eventName, ed, Hd.new_event_name);
                  if (zA(Nt)) {
                    Lh = !1;
                    break a;
                  }
                  Ec.eventName = String(Nt);
                }
                AA(Ec.eventName, ed, Hd);
                var Ot = !0;
                Ot = !1;
                xA(2);
                if (Ot) {
                  var Bl = {},
                    Pt = {
                      eventMetadata:
                        ((Bl.syn_or_mod = !0),
                        (Bl.is_external_event =
                          !!Ec.B.eventMetadata.is_external_event),
                        Bl),
                    },
                    Qt = mg();
                  Qt && (Pt.eventMetadata.event_usage = Qt);
                  var xD = lr(Ec.target.U, Ec.eventName, ed);
                  or(xD, Ec.B.eventId, Pt);
                  Ec.abort();
                }
                Lh = !0;
              } else Lh = !1;
            }
            Lh && (Mt = !0);
          }
          for (
            var Rt = zl.synthesis_rules || [], Cl = 0;
            Cl < Rt.length;
            Cl++
          ) {
            var Dl = a,
              Ef = Rt[Cl];
            if (
              Az(Dl.eventName, ed, Ef.event_name_predicate, Ef.conditions || [])
            ) {
              var El = Ef.new_event_name;
              if (!zA(El)) {
                var St = Ef.merge_source_event_params ? K(ed) : {};
                AA(El, St, Ef);
                var Tt = {},
                  yD = { eventMetadata: ((Tt.syn_or_mod = !0), Tt) },
                  zD = lr(Dl.target.U, El, St);
                or(zD, Dl.B.eventId, yD);
                xA(1);
              }
            }
          }
          if (Mt) {
            var Fl = {},
              Ut = {
                eventMetadata:
                  ((Fl.syn_or_mod = !0),
                  (Fl.is_external_event =
                    !!a.B.eventMetadata.is_external_event),
                  Fl),
              },
              Vt = mg();
            Vt && (Ut.eventMetadata.event_usage = Vt);
            var AD = lr(a.target.U, a.eventName, ed);
            or(AD, a.B.eventId, Ut);
            a.abort();
          }
        }
      }
      Rm(a);
      var Gl = a.metadata.event_usage;
      if (Da(Gl)) for (var Hl = 0; Hl < Gl.length; Hl++) xA(Gl[Hl]);
      var Wt = lg("GA4_EVENT");
      Wt && (a.C._eu = Wt);
      WB(a);
      if (a.metadata.speculative || a.R) {
        a.B.V();
        kg();
        return;
      }
      var CD = this.ai,
        Xt = this.s,
        Il;
      var Jl = RA(a);
      Jl ? (PA(Jl, a) || (N(25), a.abort()), (Il = Jl)) : (Il = void 0);
      var DD = Il,
        Mh;
      var fd = a.C[Q.g.Ab];
      Xt && fd === Xt
        ? (Mh = fd)
        : fd
        ? ((fd = "" + fd),
          JA(fd, a) || (N(31), a.abort()),
          FA(fd, ij(Q.g.X)),
          (Mh = fd))
        : (N(32), a.abort(), (Mh = ""));
      CD.call(this, { clientId: Mh, gi: DD });
      this.Ok(a);
      if (sA(a)) {
        var ED = a.metadata.is_conversion;
        ("page_view" === a.eventName || ED) && KB(this, a);
      }
      this.H.jg();
      this.yg = XB(a, this.yg);
      a.h(Q.g.oe) && ((a.C[Q.g.oe] = !0), JB(a, Q.g.Mb));
      Nm(a, Q.g.Rg);
      if (a.R) {
        a.B.V();
        kg();
        return;
      }
      this.Fh(a);
      a.B.W();
    } catch (cE) {
      a.B.V();
    }
    kg();
  };
  aa.Fh = function (a) {
    this.ab.add(a);
  };
  aa.ai = function (a) {
    var b = a.clientId,
      c = a.gi;
    b && c && ((this.s = b), (this.h = c));
  };
  aa.flush = function () {
    this.ab.flush();
  };
  aa.Ok = function (a) {
    var b = this;
    if (!this.K) {
      var c = ij(Q.g.X);
      kj([Q.g.X], function () {
        var d = ij(Q.g.X);
        if (c ^ d && b.D && b.h && b.s) {
          var e = b.s;
          if (d) {
            var f = HA(b.D);
            if (f) {
              b.s = f;
              var g = QA(b.D);
              g
                ? hg[26]
                  ? ((b.h = MA(g, b.h, b.D)), PA(b.h, b.D))
                  : (b.h = g)
                : PA(b.h, b.D);
            } else JA(b.s, b.D), FA(b.s, !0), PA(b.h, b.D);
            var h = {};
            h[Q.g.df] = e;
            var l = lr(b.aa, Q.g.We, h);
            or(l, a.B.eventId, {});
          } else {
            b.h = void 0;
            b.s = void 0;
            m.gaGlobal = {};
          }
          c = d;
        }
      });
      this.K = !0;
    }
  };
  aa.cj = function (a) {
    a.eventName !== Q.g.Ma && this.H.bj(a);
  };
  var SB = function (a) {
      var b = function (d, e) {
          var f = R(a.B, d);
          return void 0 !== f ? f : e;
        },
        c = {
          prefix: String(b(Q.g.rb, "")),
          path: String(b(Q.g.Ze, "/")),
          flags: String(b(Q.g.qb, "")),
          domain: String(b(Q.g.pb, "auto")),
          ib: Number(b(Q.g.Ra, 63072e3)),
        };
      a.metadata.cookie_options = c;
    },
    TB = function (a) {
      function b(c, d) {
        Lg[c] || void 0 === d || (a.C[c] = d);
      }
      La(a.B.Ba, b);
      La(a.B.wa, b);
    },
    UB = function (a) {
      var b = Yr(a.B),
        c = function (d, e) {
          PB[d] && (a.C[d] = e);
        };
      pc(b[Q.g.Vc])
        ? La(b[Q.g.Vc], function (d, e) {
            c((Q.g.Vc + "_" + d).toLowerCase(), e);
          })
        : La(b, c);
    },
    VB = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(uA(a));
      a.metadata.is_first_visit &&
        (a.metadata.is_first_visit_conversion = b(uA(a, "first_visit")));
      a.metadata.is_session_start &&
        (a.metadata.is_session_start_conversion = b(uA(a, "session_start")));
    },
    WB = function (a) {
      var b = Object.keys(MB);
      if (b.length) {
        b.forEach(function (d) {
          MB[d] && jg("CCD", Number(d));
        });
        var c = lg("CCD");
        c && (a.C._z = "ccd." + c);
      }
    },
    XB = function (a, b) {
      var c = void 0;
      return c;
    };
  function RB(a) {
    La(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Ua] || {};
    La(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var YB = function (a) {
      if ("prerender" == H.visibilityState) return !1;
      a();
      return !0;
    },
    ZB = function (a) {
      if (!YB(a)) {
        var b = !1,
          c = function () {
            !b && YB(a) && ((b = !0), Ub(H, "visibilitychange", c), N(55));
          };
        Tb(H, "visibilitychange", c);
        N(54);
      }
    };
  var aC = function (a, b) {
    ZB(function () {
      var c = wm(a);
      if (c) {
        var d = $B(c, b);
        su.register(a, d);
      }
    });
  };
  function $B(a, b) {
    var c = function () {};
    var d = new QB(a.id),
      e = "MC" === a.prefix;
    c = function (f, g, h, l) {
      e && (l.eventMetadata.is_merchant_center = !0);
      d.wk(g, h, l);
    };
    bC(a, d, b);
    return c;
  }
  function bC(a, b, c) {
    var d = b.H,
      e = { eventId: c };
    d.Bk(function () {
      su.flush();
      1e3 <= d.Le() && Ib.sendBeacon && tu(Q.g.We, {}, a.id, e);
      vA = !0;
      b.flush();
      d.ci(function () {
        vA = !1;
        d.ci();
      });
    });
  }
  var gC = $B;
  function iC(a, b, c, d) {
    L(
      F(this),
      [
        "target:!*",
        "eventName:!*",
        "eventParameters:?DustMap",
        "messageContext:?DustMap",
      ],
      arguments
    );
    var e = c ? rc(c) : {},
      f = rc(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? rc(d) : {},
      h = this.h.h;
    g.originatingEntity = Pz(h);
    for (var l = 0; l < f.length; l++) {
      var n = f[l];
      if ("string" === typeof n) {
        var p = K(e),
          q = K(g),
          r = lr(n, b, p);
        or(r, h.eventId, q);
      }
    }
  }
  iC.N = "internal.sendGtagEvent";
  function jC(a, b, c) {}
  jC.O = "sendPixel";
  function kC(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  kC.O = "setCookie";
  function lC(a) {
    L(F(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Qb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== Q.g.Ue && M(this, "access_consent", e, "write");
    }
    var f = this.h.h,
      g = f.eventId,
      h = Qz(f),
      l = ir("consent", "default", rc(a));
    or(l, g, h);
  }
  lC.O = "setDefaultConsentState";
  function mC(a, b, c) {
    return !1;
  }
  mC.O = "setInWindow";
  function nC(a, b, c) {
    L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = Bh(a) || {};
    d[b] = rc(c, this.h);
    var e = a;
    zh || Ah();
    yh[e] = d;
  }
  nC.N = "internal.setProductSettingsParameter";
  function oC(a, b, c) {
    L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = zu(su, a).fa, f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!pc(e[d[f]]))
        throw Error(
          "setRemoteConfigParameter failed, path contains a non-object type: " +
            d[f]
        );
      e = e[d[f]];
    }
    e[d[f]] = rc(c, this.h);
  }
  oC.N = "internal.setRemoteConfigParameter";
  function pC(a, b, c, d) {
    var e = this;
  }
  pC.O = "sha256";
  function qC(a, b, c) {}
  qC.N = "internal.sortRemoteConfigParameters";
  var rC = {},
    sC = {};
  rC.O = "templateStorage";
  rC.getItem = function (a) {
    var b = null;
    M(this, "access_template_storage");
    var c = this.h.h;
    if (!c) throw Error("invalid program state");
    var d = c.xd();
    sC[d] && (b = sC[d].hasOwnProperty("gtm." + a) ? sC[d]["gtm." + a] : null);
    return b;
  };
  rC.setItem = function (a, b) {
    M(this, "access_template_storage");
    var c = this.h.h;
    if (!c) throw Error("invalid program state");
    var d = c.xd();
    sC[d] = sC[d] || {};
    sC[d]["gtm." + a] = b;
  };
  rC.removeItem = function (a) {
    M(this, "access_template_storage");
    var b = this.h.h;
    if (!b) throw Error("invalid program state");
    var c = b.xd();
    if (!sC[c] || !sC[c].hasOwnProperty("gtm." + a)) return;
    delete sC[c]["gtm." + a];
  };
  rC.clear = function () {
    M(this, "access_template_storage");
    var a = this.h.h;
    if (!a) throw Error("invalid program state");
    delete sC[a.xd()];
  };
  var tC = function (a) {
    var b;
    return b;
  };
  function uC(a) {
    L(F(this), ["consentSettings:!DustMap"], arguments);
    var b = rc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
    var d = this.h.h;
    or(ir("consent", "update", b), d.eventId, Qz(d));
  }
  uC.O = "updateConsentState";
  var vC = function () {
    var a = new $f(),
      b = function (d) {
        var e = d.N;
        if (a.s.hasOwnProperty(e))
          throw (
            "Attempting to add a private function which already exists: " +
            e +
            "."
          );
        if (a.h.hasOwnProperty(e))
          throw (
            "Attempting to add a private function with an existing API name: " +
            e +
            "."
          );
        a.s[e] = Ba(d) ? vf(e, d) : wf(e, d);
      },
      c = function (d) {
        return a.add(d.O, d);
      };
    c(ex);
    c(kx);
    c(Xx);
    c($x);
    c(ay);
    c(ey);
    c(fy);
    c(hy);
    c(aA());
    c(iy);
    c(Dz);
    c(Iz);
    c(Jz);
    c(Kz);
    c(Nz);
    c(Sz);
    c(Tz);
    c(Wz);
    c($z);
    c(fA);
    c(gA);
    c(iA);
    c(jA);
    c(kA);
    c(jC);
    c(kC);
    c(lC);
    c(mC);
    c(pC);
    c(rC);
    c(uC);
    a.add("Math", Bf());
    a.add("Object", Yf);
    a.add("TestHelper", bg());
    a.add("assertApi", xf);
    a.add("assertThat", yf);
    a.add("decodeUri", Ff);
    a.add("decodeUriComponent", Gf);
    a.add("encodeUri", Hf);
    a.add("encodeUriComponent", If);
    a.add("fail", Jf);
    a.add("generateRandom", Kf);
    a.add("getContainerVersion", Lf);
    a.add("getTimestamp", Of);
    a.add("getTimestampMillis", Of);
    a.add("getType", Pf);
    a.add("makeInteger", Rf);
    a.add("makeNumber", Sf);
    a.add("makeString", Tf);
    a.add("makeTableMap", Uf);
    a.add("mock", Xf);
    a.add("fromBase64", Cz, !("atob" in m));
    a.add("localStorage", cA, !bA());
    a.add("toBase64", tC, !("btoa" in m));
    b(hx);
    b(Ax);
    b(Hx);
    b(Mx);
    b(Vx);
    b(cy);
    b(ty);
    b(yy);
    b(Dy);
    b(My);
    b(Qy);
    b(az);
    b(nz);
    b(tz);
    b(vz);
    b(Ez);
    b(Fz);
    b(Nf);
    b(Lz);
    b(Zz);
    b(eA);
    b(nA);
    b(oA);
    b(iC);
    b(Yx);
    b(Mz);
    b(oC);
    b(qC);
    b(Hz);
    b(nC);
    b(oz);
    b(lA);
    return function (d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.s.hasOwnProperty(d))) {
          var g = !1,
            h = this.h.h;
          if (h) {
            var l = h.xd();
            if (l) {
              0 !== l.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.s.hasOwnProperty(d) ? a.s[d] : void 0;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var wC = function () {
      return !1;
    },
    xC = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var yC;
  function zC() {
    var a = yC;
    return function (b, c, d) {
      var e = d && d.event;
      AC(c);
      var f = new ib();
      La(c, function (q, r) {
        var u = qc(r);
        void 0 === u && void 0 !== r && N(44);
        f.set(q, u);
      });
      a.h.h.K = De();
      var g = {
        uj: Qe(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        ze:
          void 0 !== e
            ? function (q) {
                return e.Db.ze(q);
              }
            : void 0,
        xd: function () {
          return b;
        },
        log: function () {},
        Ej: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (wC()) {
        var h = xC(),
          l = void 0,
          n = void 0;
        g.Xa = {
          mg: [],
          ld: {},
          hb: function (q, r, u) {
            1 === r && (l = q);
            7 === r && (n = u);
            h(q, r, u);
          },
          Yf: Vf(),
        };
        g.log = function (q, r) {
          if (l) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(l, 4, { level: q, source: n, message: u });
          }
        };
      }
      var p = Kd(a, g, [b, f]);
      a.h.h.K = void 0;
      p instanceof pa && "return" === p.h && (p = p.s);
      return rc(p);
    };
  }
  function AC(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ba(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    Ba(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function BC() {
    yC.h.h.aa = function (a, b, c) {
      $g.SANDBOXED_JS_SEMAPHORE = $g.SANDBOXED_JS_SEMAPHORE || 0;
      $g.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        $g.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function CC(a) {
    void 0 !== a &&
      La(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          lh[e] = lh[e] || [];
          lh[e].push(b);
        }
      });
  }
  var DC = encodeURI,
    X = encodeURIComponent,
    EC = Sb;
  var FC = function (a, b) {
      if (!a) return !1;
      var c = Zh(ai(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    GC = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { m: {} };
  (Z.m.access_template_storage = ["google"]),
    (function () {
      (function (a) {
        Z.__access_template_storage = a;
        Z.__access_template_storage.o = "access_template_storage";
        Z.__access_template_storage.isVendorTemplate = !0;
        Z.__access_template_storage.priorityOverride = 0;
        Z.__access_template_storage.isInfrastructure = !1;
      })(function () {
        return {
          assert: function () {},
          ca: function () {
            return {};
          },
        };
      });
    })();

  (Z.m.c = ["google"]),
    (function () {
      (function (a) {
        Z.__c = a;
        Z.__c.o = "c";
        Z.__c.isVendorTemplate = !0;
        Z.__c.priorityOverride = 0;
        Z.__c.isInfrastructure = !1;
      })(function (a) {
        tw(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Z.m.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.o = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.m.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.o = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = lw(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        tw(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.m.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Z.__process_dom_events = b;
        Z.__process_dom_events.o = "process_dom_events";
        Z.__process_dom_events.isVendorTemplate = !0;
        Z.__process_dom_events.priorityOverride = 0;
        Z.__process_dom_events.isInfrastructure = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, l, n) {
            if (!e[l]) throw d(h, {}, "Prohibited event target " + l + ".");
            if (-1 === e[l].indexOf(n))
              throw d(
                h,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          ca: a,
        };
      });
    })();

  (Z.m.read_container_data = ["google"]),
    (function () {
      (function (a) {
        Z.__read_container_data = a;
        Z.__read_container_data.o = "read_container_data";
        Z.__read_container_data.isVendorTemplate = !0;
        Z.__read_container_data.priorityOverride = 0;
        Z.__read_container_data.isInfrastructure = !1;
      })(function () {
        return {
          assert: function () {},
          ca: function () {
            return {};
          },
        };
      });
    })();
  (Z.m.listen_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        Z.__listen_data_layer = b;
        Z.__listen_data_layer.o = "listen_data_layer";
        Z.__listen_data_layer.isVendorTemplate = !0;
        Z.__listen_data_layer.priorityOverride = 0;
        Z.__listen_data_layer.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g))
              throw e(f, { eventName: g }, "Event name must be a string.");
            if (!("any" === c || ("specific" === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                "Prohibited listen on data layer event."
              );
          },
          ca: a,
        };
      });
    })();

  (Z.m.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.o = "get_url";
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!k(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!k(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          ca: a,
        };
      });
    })();
  (Z.m.gct = ["google"]),
    (function () {
      function a(d) {
        for (var e = [], f = 0; f < d.length; f++)
          try {
            e.push(new RegExp(d[f]));
          } catch (g) {}
        return e;
      }
      function b(d) {
        return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      }
      function c(d) {
        for (var e = [], f = 0; f < d.length; f++) {
          var g = d[f].matchValue,
            h;
          switch (d[f].matchType) {
            case "BEGINS_WITH":
              h = "^" + b(g);
              break;
            case "ENDS_WITH":
              h = b(g) + "$";
              break;
            case "EQUALS":
              h = "^" + b(g) + "$";
              break;
            case "REGEX":
              h = g;
              break;
            default:
              h = b(g);
          }
          e.push(h);
        }
        return e;
      }
      (function (d) {
        Z.__gct = d;
        Z.__gct.o = "gct";
        Z.__gct.isVendorTemplate = !0;
        Z.__gct.priorityOverride = 0;
        Z.__gct.isInfrastructure = !1;
      })(function (d) {
        var e = {},
          f = d.vtp_sessionDuration;
        0 < f && (e[Q.g.gd] = f);
        e[Q.g.ee] = d.vtp_eventSettings;
        e[Q.g.af] = d.vtp_dynamicEventSettings;
        e[Q.g.Bb] = 1 === d.vtp_googleSignals;
        e[Q.g.ke] = d.vtp_foreignTld;
        e[Q.g.ed] = 1 === d.vtp_restrictDomain;
        e[Q.g.ef] = d.vtp_internalTrafficResults;
        var g = Q.g.Aa,
          h = d.vtp_linker;
        h && h[Q.g.Z] && (h[Q.g.Z] = a(h[Q.g.Z]));
        e[g] = h;
        var l = Q.g.pe,
          n = d.vtp_referralExclusionDefinition;
        n &&
          n.include_conditions &&
          (n.include_conditions = a(n.include_conditions));
        e[l] = n;
        var p = d.vtp_trackingId,
          q = zu(su, p).fa,
          r = q.referral_exclusion_conditions;
        r &&
          (r.length && "object" === typeof r[0] && (r = c(r)),
          (e[Q.g.pe] = { include_conditions: a(r) }));
        var u = q.cross_domain_conditions;
        if (u) {
          u.length && "object" === typeof u[0] && (u = c(u));
          var t = {};
          e[Q.g.Aa] =
            ((t[Q.g.Z] = a(u)),
            (t[Q.g.oc] = !0),
            (t[Q.g.nc] = !0),
            (t[Q.g.fd] = "query"),
            t);
        }
        Cu(p, e);
        aC(p, d.vtp_gtmEventId);
        I(d.vtp_gtmOnSuccess);
      });
    })();

  (Z.m.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.o = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = lr(String(b.streamId), d, c);
        or(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var aE = {};
  aE.dataLayer = th;
  aE.callback = function (a) {
    kh.hasOwnProperty(a) && Ba(kh[a]) && kh[a]();
    delete kh[a];
  };
  aE.bootstrap = 0;
  aE._spx = !1;
  function bE() {
    $g[Le.P] = aE;
    Le.Ic && ($g["ctid_" + Le.Ic] = aE);
    Tj();
    Vj() ||
      La(Wj(), function (a, b) {
        jq(a, b.transportUrl);
        N(92);
      });
    Va(lh, Z.m);
    re = He;
  }
  (function (a) {
    if (!m["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (H.referrer) {
        var c = ai(H.referrer);
        b = "cct.google" === Yh(c, "host");
      }
      if (!b) {
        var d = uj("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((m["__TAGGY_INSTALLED"] = !0),
        Pb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          u = "GTM";
        (r = "OGT"), (u = "GTAG");
        var t = m["google.tagmanager.debugui2.queue"];
        t ||
          ((t = []),
          (m["google.tagmanager.debugui2.queue"] = t),
          Pb(
            "https://" +
              Zg.Jc +
              "/debug/bootstrap?id=" +
              Le.P +
              "&src=" +
              u +
              "&cond=" +
              q +
              "&gtm=" +
              ak()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: Jb,
            containerProduct: r,
            debug: !1,
            id: Le.P,
            isGte: hh,
          },
        };
        v.data.resume = function () {
          a();
        };
        Zg.vi && (v.data.initialPublish = !0);
        t.push(v);
      },
      g = void 0,
      h = Zh(m.location, "query", !1, void 0, "gtm_debug");
    Ev(h) && (g = 2);
    if (!g && H.referrer) {
      var l = ai(H.referrer);
      "tagassistant.google.com" === Yh(l, "host") && (g = 3);
    }
    if (!g) {
      var n = uj("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = H.documentElement.getAttribute("data-tag-assistant-present");
      Ev(p) && (g = 5);
    }
    g && Jb ? f(g) : a();
  })(function () {
    hg[25] && Fo();
    var a = !1;
    a && Oq("INIT");
    Ki().s();
    Ek();
    Nl.enable_gbraid_cookie_write = !0;
    var b = !!$g[Le.P];
    !b && Le.Ic && (b = !!$g["ctid_" + Le.Ic]);
    if (b) {
      var c = $g.zones;
      c && c.unregisterChild(Pj());
    } else {
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        he.push(e[f]);
      for (var g = d.tags || [], h = 0; h < g.length; h++) ke.push(g[h]);
      for (var l = d.predicates || [], n = 0; n < l.length; n++) je.push(l[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var r = p[q], u = {}, t = 0; t < r.length; t++)
          u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
        ie.push(u);
      }
      me = Z;
      ne = cx;
      Pe = new Oe();
      var v = data.sandboxed_scripts,
        w = data.security_groups,
        x = data.runtime || [],
        y = data.runtime_lines;
      yC = new Id();
      BC();
      ge = zC();
      var A = yC,
        B = vC();
      lb(A.h, "require", B);
      for (var C = 0; C < x.length; C++) {
        var D = x[C];
        if (!Da(D) || 3 > D.length) {
          if (0 === D.length) continue;
          break;
        }
        y && y[C] && y[C].length && Ae(D, y[C]);
        yC.execute(D);
      }
      if (void 0 !== v)
        for (var G = ["sandboxedScripts"], E = 0; E < v.length; E++) {
          var J = v[E].replace(/^_*/, "");
          lh[J] = G;
        }
      CC(w);
      bE();
      Dv();
      yq = !1;
      zq = 0;
      if (
        ("interactive" == H.readyState && !H.createEventObject) ||
        "complete" == H.readyState
      )
        Bq();
      else {
        Tb(H, "DOMContentLoaded", Bq);
        Tb(H, "readystatechange", Bq);
        if (H.createEventObject && H.documentElement.doScroll) {
          var P = !0;
          try {
            P = !m.frameElement;
          } catch (ea) {}
          P && Cq();
        }
        Tb(m, "load", Bq);
      }
      Su = !1;
      "complete" === H.readyState ? Uu() : Tb(m, "load", Uu);
      vo();
      jh = Sa();
      aE.bootstrap = jh;
      if (a) {
        var O = Pq("INIT");
      }
    }
  });
})();
