import { TerraformConfig, TerraformResource } from "tfs";
export interface ApiGateway {
  default_size_inspection_limit: string;
}
export interface AppRunnerService {
  default_size_inspection_limit: string;
}
export interface Cloudfront {
  default_size_inspection_limit: string;
}
export interface CognitoUserPool {
  default_size_inspection_limit: string;
}
export interface VerifiedAccessInstance {
  default_size_inspection_limit: string;
}
export interface RequestBody {
  api_gateway: ApiGateway;
  app_runner_service: AppRunnerService;
  cloudfront: Cloudfront;
  cognito_user_pool: CognitoUserPool;
  verified_access_instance: VerifiedAccessInstance;
}
export interface AssociationConfig {
  request_body: RequestBody;
}
export interface ImmunityTimeProperty {
  immunity_time?: number;
}
export interface CaptchaConfig {
  immunity_time_property: ImmunityTimeProperty;
}
export interface ImmunityTimeProperty {
  immunity_time?: number;
}
export interface ChallengeConfig {
  immunity_time_property: ImmunityTimeProperty;
}
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
export interface DefaultAction {
  allow: Allow;
  block: Block;
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
export interface Count {}
export interface None {}
export interface OverrideAction {
  count: Count;
  none: None;
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
export interface AddressFields {
  identifiers: string[];
}
export interface EmailField {
  identifier: string;
}
export interface PasswordField {
  identifier: string;
}
export interface PhoneNumberFields {
  identifiers: string[];
}
export interface UsernameField {
  identifier: string;
}
export interface RequestInspection {
  payload_type: string;
  address_fields: AddressFields;
  email_field: EmailField;
  password_field: PasswordField;
  phone_number_fields: PhoneNumberFields;
  username_field: UsernameField;
}
export interface BodyContains {
  failure_strings: string[];
  success_strings: string[];
}
export interface Header {
  failure_values: string[];
  name: string;
  success_values: string[];
}
export interface Json {
  failure_values: string[];
  identifier: string;
  success_values: string[];
}
export interface StatusCode {
  failure_codes: number[];
  success_codes: number[];
}
export interface ResponseInspection {
  body_contains: BodyContains;
  header: Header;
  json: Json;
  status_code: StatusCode;
}
export interface AwsManagedRulesAcfpRuleSet {
  creation_path: string;
  registration_page_path: string;
  request_inspection: RequestInspection;
  response_inspection: ResponseInspection;
}
export interface PasswordField {
  identifier: string;
}
export interface UsernameField {
  identifier: string;
}
export interface RequestInspection {
  payload_type: string;
  password_field: PasswordField;
  username_field: UsernameField;
}
export interface BodyContains {
  failure_strings: string[];
  success_strings: string[];
}
export interface Header {
  failure_values: string[];
  name: string;
  success_values: string[];
}
export interface Json {
  failure_values: string[];
  identifier: string;
  success_values: string[];
}
export interface StatusCode {
  failure_codes: number[];
  success_codes: number[];
}
export interface ResponseInspection {
  body_contains: BodyContains;
  header: Header;
  json: Json;
  status_code: StatusCode;
}
export interface AwsManagedRulesAtpRuleSet {
  login_path: string;
  request_inspection: RequestInspection;
  response_inspection: ResponseInspection;
}
export interface AwsManagedRulesBotControlRuleSet {
  enable_machine_learning?: boolean;
  inspection_level: string;
}
export interface PasswordField {
  identifier: string;
}
export interface UsernameField {
  identifier: string;
}
export interface ManagedRuleGroupConfigs {
  login_path?: string;
  payload_type?: string;
  aws_managed_rules_acfp_rule_set: AwsManagedRulesAcfpRuleSet;
  aws_managed_rules_atp_rule_set: AwsManagedRulesAtpRuleSet;
  aws_managed_rules_bot_control_rule_set: AwsManagedRulesBotControlRuleSet;
  password_field: PasswordField;
  username_field: UsernameField;
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
export interface ActionToUse {
  allow: Allow;
  block: Block;
  captcha: Captcha;
  challenge: Challenge;
  count: Count;
}
export interface RuleActionOverride {
  name: string;
  action_to_use: ActionToUse;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
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
export interface ManagedRuleGroupStatement {
  name: string;
  vendor_name: string;
  version?: string;
  managed_rule_group_configs: ManagedRuleGroupConfigs;
  rule_action_override: RuleActionOverride;
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
export interface ActionToUse {
  allow: Allow;
  block: Block;
  captcha: Captcha;
  challenge: Challenge;
  count: Count;
}
export interface RuleActionOverride {
  name: string;
  action_to_use: ActionToUse;
}
export interface RuleGroupReferenceStatement {
  arn: string;
  rule_action_override: RuleActionOverride;
}
export interface AllQueryArguments {}
export interface Body {
  oversize_handling?: string;
}
export interface All {}
export interface MatchPattern {
  excluded_cookies?: string[];
  included_cookies?: string[];
  all: All;
}
export interface Cookies {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface HeaderOrder {
  oversize_handling: string;
}
export interface All {}
export interface MatchPattern {
  excluded_headers?: string[];
  included_headers?: string[];
  all: All;
}
export interface Headers {
  match_scope: string;
  oversize_handling: string;
  match_pattern: MatchPattern;
}
export interface Ja3Fingerprint {
  fallback_behavior: string;
}
export interface All {}
export interface MatchPattern {
  included_paths?: string[];
  all: All;
}
export interface JsonBody {
  invalid_fallback_behavior?: string;
  match_scope: string;
  oversize_handling?: string;
  match_pattern: MatchPattern;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface SingleQueryArgument {
  name: string;
}
export interface UriPath {}
export interface FieldToMatch {
  all_query_arguments: AllQueryArguments;
  body: Body;
  cookies: Cookies;
  header_order: HeaderOrder;
  headers: Headers;
  ja3_fingerprint: Ja3Fingerprint;
  json_body: JsonBody;
  method: Method;
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
  managed_rule_group_statement: ManagedRuleGroupStatement;
  not_statement: NotStatement;
  or_statement: OrStatement;
  rate_based_statement: RateBasedStatement;
  regex_match_statement: RegexMatchStatement;
  regex_pattern_set_reference_statement: RegexPatternSetReferenceStatement;
  rule_group_reference_statement: RuleGroupReferenceStatement;
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
  override_action: OverrideAction;
  rule_label: RuleLabel;
  statement: Statement;
  visibility_config: VisibilityConfig;
}
export interface VisibilityConfig {
  cloudwatch_metrics_enabled: boolean;
  metric_name: string;
  sampled_requests_enabled: boolean;
}
export interface AwsWafv2WebAclArgs {
  description?: string;
  name: string;
  rule_json?: string;
  scope: string;
  tags?: {
    [key: string]: string;
  };
  token_domains?: string[];
  association_config: AssociationConfig;
  captcha_config: CaptchaConfig;
  challenge_config: ChallengeConfig;
  custom_response_body: CustomResponseBody;
  default_action: DefaultAction;
  rule: Rule;
  visibility_config: VisibilityConfig;
}
export class aws_wafv2_web_acl extends TerraformResource {
  readonly application_integration_url!: string;
  readonly arn!: string;
  readonly capacity!: number;
  readonly id?: string;
  readonly lock_token!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2WebAclArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_web_acl");
  }
}