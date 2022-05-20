<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id_projeto
 * @property string $pronac
 * @property string $ano_projeto
 * @property string $nome
 * @property string $segmento
 * @property string $area
 * @property string $uf
 * @property string $municipio
 * @property string $data_inicio
 * @property string $data_termino
 * @property string $situacao
 * @property string $mecanismo
 * @property string $enquadramento
 * @property string $valor_captado
 * @property string $valor_aprovado
 * @property string $acessibilidade
 * @property string $objetivos
 * @property string $justificativa
 * @property string $etapa
 * @property string $ficha_tecnica
 * @property string $impacto_ambiental
 * @property string $especificacao_tecnica
 * @property string $providencia
 * @property string $democratizacao
 * @property string $sinopse
 * @property string $resumo
 * @property string $created_at
 * @property string $updated_at
 * @property string $valor_projeto
 * @property string $outras_fontes
 * @property string $valor_proposta
 * @property string $valor_solicitado
 * @property string $objetivo
 * @property string $estrategia_execucao
 * @property string $link_incentivadores
 */
class Rouanet extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'tb_projeto_rouanet_teste';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'id_projeto';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['pronac', 'ano_projeto', 'nome', 'segmento', 'area', 'uf', 'municipio', 'data_inicio', 'data_termino', 'situacao', 'mecanismo', 'enquadramento', 'valor_captado', 'valor_aprovado', 'acessibilidade', 'objetivos', 'justificativa', 'etapa', 'ficha_tecnica', 'impacto_ambiental', 'especificacao_tecnica', 'providencia', 'democratizacao', 'sinopse', 'resumo', 'created_at', 'updated_at', 'valor_projeto', 'outras_fontes', 'valor_proposta', 'valor_solicitado', 'objetivo', 'estrategia_execucao', 'link_incentivadores'];
}
