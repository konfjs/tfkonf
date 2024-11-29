import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomResponseBody {
  content: string;
  content_type: string;
  key: string;
}
export interface InsertHeader {
  name: string;
  value: string;
}
export interface CustomRequestHandling {
  insert_header: InsertHeader;
}
export interface Allow {
  custom_request_handling: CustomRequestHandling;
}
export interface ResponseHeader {
  name: string;
  value: string;
}
export interface CustomResponse {
  custom_response_body_key?: string;
  response_code: number;
  response_header: ResponseHeader;
}
export interface Block {
  custom_response: CustomResponse;
}
export interface InsertHeader {
  name: string;
  value: string;
}
export interface CustomRequestHandling {
  insert_header: InsertHeader;
}
export interface Captcha {
  custom_request_handling: CustomRequestHandling;
}
export interface InsertHeader {
  name: string;
  value: string;
}
export interface CustomRequestHandling {
  insert_header: InsertHeader;
}
export interface Challenge {
  custom_request_handling: CustomRequestHandling;
}
export interface InsertHeader {
  name: string;
  value: string;
}
export interface CustomRequestHandling {
  insert_header: InsertHeader;
}
export interface Count {
  custom_request_handling: CustomRequestHandling;
}
export interface Action {
  allow: Allow;
  block: Block;
  captcha: Captcha;
  challenge: Challenge;
  count: Count;
}
export interface ImmunityTimeProperty {
  immunity_time?: number;
}
export interface CaptchaConfig {
  immunity_time_property: ImmunityTimeProperty;
}
export interface RuleLabel {
  name: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface Cookie {
  name: string;
  text_transformation: TextTransformation;
}
export interface ForwardedIp {}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface Header {
  name: string;
  text_transformation: TextTransformation;
}
export interface HttpMethod {}
export interface Ip {}
export interface LabelNamespace {
  namespace: string;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface QueryArgument {
  name: string;
  text_transformation: TextTransformation;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface QueryString {
  text_transformation: TextTransformation;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface UriPath {
  text_transformation: TextTransformation;
}
export interface CustomKey {
  cookie: Cookie;
  forwarded_ip: ForwardedIp;
  header: Header;
  http_method: HttpMethod;
  ip: Ip;
  label_namespace: LabelNamespace;
  query_argument: QueryArgument;
  query_string: QueryString;
  uri_path: UriPath;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface AndStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface NotStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface ByteMatchStatement {
  positional_constraint: string;
  search_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
}
export interface GeoMatchStatement {
  country_codes: string[];
  forwarded_ip_config: ForwardedIpConfig;
}
export interface IpSetForwardedIpConfig {
  fallback_behavior: string;
  header_name: string;
  position: string;
}
export interface IpSetReferenceStatement {
  arn: string;
  ip_set_forwarded_ip_config: IpSetForwardedIpConfig;
}
export interface LabelMatchStatement {
  key: string;
  scope: string;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface OrStatement {
  statement: Statement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface ScopeDownStatement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface RateBasedStatement {
  aggregate_key_type?: string;
  evaluation_window_sec?: number;
  limit: number;
  custom_key: CustomKey;
  forwarded_ip_config: ForwardedIpConfig;
  scope_down_statement: ScopeDownStatement;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexMatchStatement {
  regex_string: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface RegexPatternSetReferenceStatement {
  arn: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SizeConstraintStatement {
  comparison_operator: string;
  size: number;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface SqliMatchStatement {
  sensitivity_level?: string;
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  single_query_argument: SingleQueryArgument;
  uri_path: UriPath;
}
export interface TextTransformation {
  priority: number;
  type: string;
}
export interface XssMatchStatement {
  field_to_match: FieldToMatch;
  text_transformation: TextTransformation;
}
export interface Statement {
  and_statement: AndStatement;
  byte_match_statement: ByteMatchStatement;
  geo_match_statement: GeoMatchStatement;
  ip_set_reference_statement: IpSetReferenceStatement;
  label_match_statement: LabelMatchStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  rate_based_statement: RateBasedStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  size_constraint_statement: SizeConstraintStatement;
  sqli_match_statement: SqliMatchStatement;
  xss_match_statement: XssMatchStatement;
}
export interface VisibilityConfig {
  cloudwatch_metrics_enabled: boolean;
  metric_name: string;
  sampled_requests_enabled: boolean;
}
export interface Rule {
  name: string;
  priority: number;
  action: Action;
  captcha_config: CaptchaConfig;
  rule_label: RuleLabel;
  statement: Statement;
  visibility_config: VisibilityConfig;
}
export interface VisibilityConfig {
  cloudwatch_metrics_enabled: boolean;
  metric_name: string;
  sampled_requests_enabled: boolean;
}
export interface AwsWafv2RuleGroupArgs {
  capacity: number;
  description?: string;
  scope: string;
  tags?: {
    [key: string]: string;
  };
  custom_response_body: CustomResponseBody;
  rule: Rule;
  visibility_config: VisibilityConfig;
}
export class aws_wafv2_rule_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly lock_token!: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2RuleGroupArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_rule_group");
  }
}