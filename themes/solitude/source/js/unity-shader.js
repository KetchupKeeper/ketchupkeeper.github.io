export default function (hljs) {
    //关键词
    const KEYWORDS = {
      keyword:
        'Shader SubShader Pass CGPROGRAM ENDCG Properties Tags LOD Fallback ' +
        'Category Blend ZWrite ZTest Cull ColorMask Offset Fog Lighting ' +
        'Material SetTexture BindChannels UsePass GrabPass Stencil ' +
        'HLSLINCLUDE HLSLPROGRAM ENDHLSL',
      built_in:
        'float half fixed int bool sampler2D sampler3D samplerCUBE ' +
        'float2 float3 float4 half2 half3 half4 fixed2 fixed3 fixed4 ' +
        'int2 int3 int4 bool2 bool3 bool4 matrix ' +
        'tex2D tex2Dproj tex3D texCUBE UNITY_MATRIX_MVP UNITY_MATRIX_MV ' +
        'UNITY_MATRIX_P UNITY_MATRIX_V UNITY_MATRIX_VP UNITY_MATRIX_T_MV ' +
        'UNITY_MATRIX_IT_MV UNITY_MATRIX_TEXTURE0 UNITY_MATRIX_TEXTURE1 ' +
        'UNITY_MATRIX_TEXTURE2 UNITY_MATRIX_TEXTURE3',
      literal:
        'true false'
    };
  
    const COMMENT_MODES = [
      hljs.C_LINE_COMMENT_MODE, // 单行注释 //
      hljs.C_BLOCK_COMMENT_MODE // 多行注释 /* */
    ];
  
    const STRING_MODE = hljs.QUOTE_STRING_MODE; // 字符串
    const NUMBER_MODE = hljs.C_NUMBER_MODE; // 数字
  
    const CGPROGRAM_MODE = {
      className: 'meta',
      begin: /CGPROGRAM/,
      end: /ENDCG/,
      contains: [
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        STRING_MODE,
        NUMBER_MODE,
        {
          className: 'keyword',
          begin: /#\s*\w+/,
          relevance: 0
        }
      ]
    };
  
    const HLSLINCLUDE_MODE = {
      className: 'meta',
      begin: /HLSLINCLUDE/,
      end: /ENDHLSL/,
      contains: [
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        STRING_MODE,
        NUMBER_MODE,
        {
          className: 'keyword',
          begin: /#\s*\w+/,
          relevance: 0
        }
      ]
    };
  
    return {
      name: 'Unity Shader',
      aliases: ['shader', 'unity-shader'],
      keywords: KEYWORDS,
      contains: [
        ...COMMENT_MODES,
        STRING_MODE,
        NUMBER_MODE,
        CGPROGRAM_MODE,
        HLSLINCLUDE_MODE,
        {
          className: 'meta',
          begin: /Shader\s+"[^"]+"/,
          relevance: 10
        },
        {
          className: 'meta',
          begin: /Properties\s*{/,
          end: /}/,
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            STRING_MODE,
            NUMBER_MODE,
            {
              className: 'keyword',
              begin: /\w+\s*\([^)]*\)/,
              relevance: 0
            }
          ]
        },
        {
          className: 'meta',
          begin: /SubShader\s*{/,
          end: /}/,
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            STRING_MODE,
            NUMBER_MODE,
            {
              className: 'keyword',
              begin: /Pass\s*{/,
              end: /}/,
              contains: [
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                STRING_MODE,
                NUMBER_MODE,
                CGPROGRAM_MODE,
                HLSLINCLUDE_MODE
              ]
            }
          ]
        }
      ]
    };
  }