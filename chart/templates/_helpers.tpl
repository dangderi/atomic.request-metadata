{{/*
Expand the name of the chart.
*/}}
{{- define "atomic-request-metadata.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "atomic-request-metadata.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "atomic-request-metadata.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "atomic-request-metadata.labels" -}}
helm.sh/chart: {{ include "atomic-request-metadata.chart" . }}
{{ include "atomic-request-metadata.codeGenLabels" . }}
{{ include "atomic-request-metadata.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
CodeGen labels
*/}}
{{- define "atomic-request-metadata.codeGenLabels" -}}
codegen/version: 1.1.0
{{- end }}

{{/*
Selector labels
*/}}
{{- define "atomic-request-metadata.selectorLabels" -}}
app.kubernetes.io/name: {{ include "atomic-request-metadata.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "atomic-request-metadata.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "atomic-request-metadata.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}
