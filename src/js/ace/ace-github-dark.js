/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

window.ace.define(
  'ace/github/dark',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  (acequire, exports, module) => {
    exports.isDark = true
    exports.cssClass = 'ace-github-dark'
    exports.cssText = `.ace-github-dark .ace_gutter {
      background: #24292e;
      color: #7388b5
    }
    
    .ace-github-dark .ace_print-margin {
      width: 1px;
      background: #00204b
    }
    
    .ace-github-dark {
      background-color: #24292e;
      color: #FFFFFF
    }
    
    .ace-github-dark .ace_constant.ace_other,
    .ace-github-dark .ace_cursor {
      color: #FFFFFF
    }
    
    .ace-github-dark .ace_marker-layer .ace_selection {
      background: #003F8E
    }
    
    .ace-github-dark.ace_multiselect .ace_selection.ace_start {
      box-shadow: 0 0 3px 0px #24292e;
    }
    
    .ace-github-dark .ace_marker-layer .ace_step {
      background: rgb(127, 111, 19)
    }
    
    .ace-github-dark .ace_marker-layer .ace_bracket {
      margin: -1px 0 0 -1px;
      border: 1px solid #404F7D
    }
    
    .ace-github-dark .ace_marker-layer .ace_active-line {
      background: #00346E
    }
    
    .ace-github-dark .ace_gutter-active-line {
      background-color: #24292e
    }
    
    .ace-github-dark .ace_marker-layer .ace_selected-word {
      border: 1px solid #003F8E
    }
    
    .ace-github-dark .ace_invisible {
      color: #404F7D
    }
    
    .ace-github-dark .ace_keyword,
    .ace-github-dark .ace_meta,
    .ace-github-dark .ace_storage,
    .ace-github-dark .ace_storage.ace_type,
    .ace-github-dark .ace_support.ace_type {
      color: #ff7b72
    }
    
    .ace-github-dark .ace_keyword.ace_operator {
      color: #79c0ff
    }
    
    .ace-github-dark .ace_constant.ace_character,
    .ace-github-dark .ace_constant.ace_language,
    .ace-github-dark .ace_constant.ace_numeric,
    .ace-github-dark .ace_keyword.ace_other.ace_unit,
    .ace-github-dark .ace_support.ace_constant,
    .ace-github-dark .ace_variable.ace_parameter {
      color: #FFC58F
    }
    
    .ace-github-dark .ace_invalid {
      color: #FFFFFF;
      background-color: #F99DA5
    }
    
    .ace-github-dark .ace_invalid.ace_deprecated {
      color: #FFFFFF;
      background-color: #ff7b72
    }
    
    .ace-github-dark .ace_fold {
      background-color: #BBDAFF;
      border-color: #FFFFFF
    }
    
    .ace-github-dark .ace_entity.ace_name.ace_function,
    .ace-github-dark .ace_support.ace_function,
    .ace-github-dark .ace_variable {
      color: #BBDAFF
    }
    
    .ace-github-dark .ace_support.ace_class,
    .ace-github-dark .ace_support.ace_type {
      color: #FFEEAD
    }
    
    .ace-github-dark .ace_heading,
    .ace-github-dark .ace_markup.ace_heading,
    .ace-github-dark .ace_string {
      color: #9fcef6
    }
    
    .ace-github-dark .ace_entity.ace_name.ace_tag,
    .ace-github-dark .ace_entity.ace_other.ace_attribute-name,
    .ace-github-dark .ace_meta.ace_tag,
    .ace-github-dark .ace_string.ace_regexp,
    .ace-github-dark .ace_variable {
      color: #FF9DA4
    }
    
    .ace-github-dark .ace_comment {
      color: #7285B7
    }
    
    .ace-github-dark .ace_indent-guide {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y
    }
    
    .ace-github-dark .ace_indent-guide-active {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
    }
    
    .ace-github-dark .ace_constant.ace_buildin {
      color: #0086B3;
    }
    
    .ace-github-dark .ace_variable.ace_language {
      color: #ffffff;
    }
      `

    const dom = acequire('../lib/dom')
    dom.importCssString(exports.cssText, exports.cssClass)
  }
)
